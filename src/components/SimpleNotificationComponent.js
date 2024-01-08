import "../styles/_SimpleNotificationComponent.scss";

const SimpleNotificationComponent = ({
  userThumbnail,
  userName,
  notification,
  reactionActivity,
  groupActivity,
  time,
}) => {
  return (
    <div className="simple-notification-component-wrapper">
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
          <div className="active-notification active"></div>
        </div>
        <span className="notification-time">{time}</span>
      </div>
    </div>
  );
};

export default SimpleNotificationComponent;
