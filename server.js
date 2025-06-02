const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

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
