import NotificationComponent from "../components/NotificationComponent";
import "../styles/_NotificationPage.scss";

const NotificationPage = ({
  notificationCount,
  setNotificationCount,
  notificationsData,
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

      {notificationsData.map((notif) => (
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
