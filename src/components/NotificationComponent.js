import "../styles/_NotificationComponent.scss";

const NotificationComponent = ({
  activeClass,
  userThumbnail,
  userName,
  notification,
  reactionActivity,
  groupActivity,
  time,
  message,
}) => {
  return (
    <div
      className={`simple-notification-component-wrapper ${
        activeClass ? "active" : ""
      }`}
    >
      <img
        src={userThumbnail}
        alt="user profile thumbnail"
        className="user-avatar-thumbnail"
      />
      <div className="notification-content">
        <div className="notification-info">
          <span className="user-name">
            <strong>{userName}</strong>
          </span>
          <span className="notification-message">
            <strong>{notification} </strong>
          </span>
          <span className="notification-message reaction-activity">
            <strong>{reactionActivity} </strong>
          </span>
          <span className="notification-message group-activity">
            <strong>{groupActivity}</strong>
          </span>
          <div
            className={`active-notification ${activeClass ? "active" : ""}`}
          ></div>
        </div>
        <span className="notification-time">{time}</span>
        <div className={`message-wrapper ${message ? "active" : ""}`}>
          <span className="message-txt">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;