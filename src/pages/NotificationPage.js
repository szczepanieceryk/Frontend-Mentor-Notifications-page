import SimpleNotificationComponent from "../components/SimpleNotificationComponent";
import "../styles/_NotificationPage.scss";
import userAvatar from "../images/avatar-angela-gray.webp";

const NotificationPage = ({ notificationCount, setNotificationCount }) => {
  const unActiveNotifications = [];
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
      <SimpleNotificationComponent
        userThumbnail={userAvatar}
        userName="Kimberly Smith"
        notification="commented on your picture"
        time="1 week ago"
      />
    </div>
  );
};

export default NotificationPage;
