import "../styles/_SimpleNotificationComponent.scss";
import userAvatar from "../images/avatar-angela-gray.webp";

const SimpleNotificationComponent = () => {
  return (
    <div className="simple-notification-component-wrapper">
      <img
        src={userAvatar}
        alt="user profile thumbnail"
        className="user-avatar-thumbnail"
      />
      <div className="notification-content">
        <div className="notification-info">
          <span className="user-name">
            <strong>Angela Gray</strong>
          </span>
          <span className="notification-message">
            <strong>followed you</strong>
          </span>
          <div className="active-notification"></div>
        </div>
        <span className="notification-time">5m ago</span>
      </div>
    </div>
  );
};

export default SimpleNotificationComponent;
