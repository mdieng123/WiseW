// Notifications.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style/Notifications.css';
import SideBar from './Sidebar';

const Notifications = () => {
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      message: 'Your monthly spending report is ready.',
      date: new Date(2024, 1, 10),
    },
    {
      id: 2,
      type: 'tip',
      message: 'Tip: Try categorizing your expenses to get better insights.',
      date: new Date(2024, 1, 15), 
    },
    {
      id: 3,
      type: 'info',
      message: 'You reached a savings milestone! Keep it up!',
      date: new Date(2024, 1, 20),
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, unread: false } : notification
      )
    );
  };

  return (
    
    <div className="notifications-container">
      <h1 className="title">Notifications</h1>
      <div className="calendar-container">
        <Calendar
          className="custom-calendar"
          tileClassName={({ date }) =>
            notifications.some((notification) => notification.date.toDateString() === date.toDateString())
              ? 'marked-date'
              : null
          }
        />
      </div>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className={`notification ${notification.type}`}>
            {notification.unread && <div className="unread-indicator"></div>}
            <div className="message">{notification.message}</div>
            {notification.message.length > 50 && (
              <span className="view-more" onClick={() => markAsRead(notification.id)}>
                View More
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
