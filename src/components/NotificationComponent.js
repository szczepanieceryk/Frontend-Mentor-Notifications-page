import "../styles/_NotificationComponent.scss";

// This is component of a single Notification

// it takes as a parameters:

// avtiveClass - string to determine if notification is an active one or not
// userThumbnail - object or a path to an user avatar thumbnail
// userName - string representing user name
// notification - string general notification type
// reactionActivity - string more specific notification
// reactionImg - object or a path to an image user reacted
// time - string when the notification showed up
// message - string of a private message sent to an user

// If any of parameters don't have a place in appropriate notification, empty string is an default opption
const NotificationComponent = ({
  activeClass,
  userThumbnail,
  userName,
  notification,
  reactionActivity,
  reactionImg,
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
        <img
          src={reactionImg}
          alt="reaction thumbnail"
          className={`reaction-img ${reactionImg ? "show" : "hide"}`}
        />
        <span className="notification-time">{time}</span>
        <div className={`message-wrapper ${message ? "active" : ""}`}>
          <span className="message-txt">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
