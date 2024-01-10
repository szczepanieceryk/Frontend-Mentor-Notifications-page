import { useState } from "react";
import NotificationComponent from "../components/NotificationComponent";
import "../styles/_NotificationPage.scss";

const NotificationPage = ({
  notificationCount,
  setNotificationCount,
  notificationsData,
}) => {
  // create State out of array with notification data (objects representing single notification)
  // use this State to dynamically display & update notifications
  const [notifications, setNotifications] = useState(notificationsData);

  // Make a copy of single notification object and 'switch' its active state to non-active (empty string)
  // Update State with new values (and re-render NotificationComponents)
  const handleNotificationsClear = () => {
    const updateNotifications = notifications.map((notification) => ({
      ...notification,
      activeClass: "",
    }));

    setNotifications(updateNotifications);
    setNotificationCount(0);
  };

  return (
    <div className="notification-page-wrapper">
      <div className="notifications-info">
        <div className="notification-count-info">
          <span className="notifications-count-label">
            <strong> Notifications</strong>
          </span>{" "}
          <div className="notification-counter">
            <strong>{notificationCount}</strong>
          </div>
        </div>
        <span className="mark-as-read">
          <strong onClick={handleNotificationsClear}>Mark all as read</strong>
        </span>
      </div>

      {notifications.map((notif) => (
        <NotificationComponent
          key={notif.id}
          activeClass={notif.activeClass}
          userThumbnail={notif.userThumbnail}
          userName={notif.userName}
          notification={notif.notification}
          reactionActivity={notif.reactionActivity}
          reactionImg={notif.reactionImg}
          groupActivity={notif.groupActivity}
          time={notif.time}
          message={notif.message}
        />
      ))}
    </div>
  );
};

export default NotificationPage;
