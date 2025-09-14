const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const app = express();
const port = 3001;
//For connecting to the database and signup
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Msanda@1697',
    database: 'user_auth',
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: 'User registered successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//For sign in
app.use(cors());
app.use(express.json());
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('DB error:', err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isAdmin = user.email === 'admin111@gmail.com';
        res.json({ message: 'Login successful', isAdmin });
    });
});

// Use multer for handling multipart/form-data
const storage = multer.memoryStorage(); // Image will be stored in memory as Buffer
const upload = multer({ storage });

// POST endpoint to receive form data + image
app.post('/api/events', upload.single('image'), (req, res) => {
  const { eventName, eventDescription, location, eventDate, eventTime } = req.body;
  const image = req.file ? req.file.buffer : null;

  const sql = `INSERT INTO events 
    (eventName, eventDescription, location, eventDate, eventTime, image) 
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [eventName, eventDescription, location, eventDate, eventTime, image], (err, result) => {
    if (err) {
      console.error('DB Error:', err);
      return res.status(500).send('Database error');
    }
    res.send('Event created successfully');
  });
});