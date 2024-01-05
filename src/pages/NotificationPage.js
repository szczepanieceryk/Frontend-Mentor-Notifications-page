import SimpleNotificationComponent from "../components/SimpleNotificationComponent";
import "../styles/_NotificationPage.scss";

const NotificationPage = ({ notificationCount, setNotificationCount }) => {
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
      <SimpleNotificationComponent />
    </div>
  );
};

export default NotificationPage;
