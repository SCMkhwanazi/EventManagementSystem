
import { useNavigate } from 'react-router-dom';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import './CalendarTheme.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Sample hackathon events
const events = [
  {
    title: 'Hackathon A',
    start: new Date(2025, 4, 20, 10, 0),/*(year, monthIndex, day, hours, minutes, seconds)*/
    end: new Date(2025, 4, 20, 18, 0),
  },
  {
    title: 'Hackathon B',
    start: new Date(2025, 4, 25, 9, 0),
    end: new Date(2025, 4, 25, 17, 0),
  },
  {
    title: 'Hackathon C',
    start: new Date(2025, 4, 28, 12, 0),
    end: new Date(2025, 4, 28, 10, 0),
  },
];

const Calendar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#121212', color: 'black', minHeight: '100vh' }}>
      {/* Back Button */}
      <button className="btn btn-dark mb-3 ms-3 mt-3 text-white" onClick={() => navigate('/HomePage')}>
        <i className="bi bi-arrow-left btn btn-outline-success me-2"></i> Back To Home Page
      </button>

      {/* Page Header */}
      <div className="container mt-4">
        <h1 className="mb-3 text-light"><i className="bi bi-calendar-event-fill"></i> Calendar</h1>
        <p className="mb-3 text-light">See all upcoming hackathons in a single view.</p>

        {/* Real Calendar */}
        <div className="bg-dark p-3 rounded mb-5" style={{ height: '400px' }}>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', color: '#ccc' }}>
        <div className="mb-2">
          <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
        </div>
        <a href="#top" className="text-info d-block mb-2">Back to Top ↑</a>
        <div>📧 support@hacktrack.com | ☎ +27 (71) 376-6731</div>
        <div className="mt-3">&copy; 2025 HackTrack. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Calendar;
