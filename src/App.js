import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import HomePage from './components/HomePage';
import Organiser from './components/Organiser';
import CreateEvent from './components/CreateEvent';
import Calendar from './components/Calendar';
import SecondNotification from './components/SecondNotification';
import Feedback from './components/Feedback';
import UserEvents from './components/UserEvents';
import UserNotifications from './components/UserNotifications';
import UserCalendar from './components/UserCalendar';
import UserFeedback from './components/UserFeedback';



function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutSection />
              <Footer />
            </>
          }
        />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/organiser" element={<Organiser />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/secondnotification" element={<SecondNotification />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/feedback" element={<Feedback />} />
        {/* ✅ New user route */}
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/userevents" element={<UserEvents />} />
        <Route path="/usernotifications" element={<UserNotifications />} />
        <Route path="/usercalendar" element={<UserCalendar />} />
        <Route path="/userfeedback" element={<UserFeedback />} />
      </Routes>
    </Router>
  );
}

export default App




