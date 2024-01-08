import SimpleNotificationComponent from "../components/SimpleNotificationComponent";
import "../styles/_NotificationPage.scss";

const NotificationPage = ({
  notificationCount,
  setNotificationCount,
  newNotifications,
  oldNotifications,
}) => {
  const handleNotificationsClear = () => {
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

      {newNotifications.map((notif) => (
        <SimpleNotificationComponent
          key={notif.id}
          activeClass={notif.activeClass}
          userThumbnail={notif.userThumbnail}
          userName={notif.userName}
          notification={notif.notification}
          reactionActivity={notif.reactionActivity}
          groupActivity={notif.groupActivity}
          time={notif.time}
        />
      ))}

      {oldNotifications.map((notif) => (
        <SimpleNotificationComponent
          key={notif.id}
          activeClass={notif.activeClass}
          userThumbnail={notif.userThumbnail}
          userName={notif.userName}
          notification={notif.notification}
          reactionActivity={notif.reactionActivity}
          groupActivity={notif.groupActivity}
          time={notif.time}
        />
      ))}
    </div>
  );
};

export default NotificationPage;
