// Notifications.js
import React, { useState } from 'react';
import '../style/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      message: 'Your monthly spending report is ready.',
    },
    {
      id: 2,
      type: 'tip',
      message: 'Tip: Try categorizing your expenses to get better insights.',
    },
    {
      id: 3,
      type: 'info',
      message: 'You reached a savings milestone! Keep it up!',
    },
    // Add more sample notifications as needed
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
      <h1>Notifications</h1>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className={`notification ${notification.type}`}>
            {notification.unread && <div className="unread-indicator"></div>}
            {notification.message}
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

