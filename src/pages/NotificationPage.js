import SimpleNotificationComponent from "../components/SimpleNotificationComponent";
import "../styles/_NotificationPage.scss";
import userAvatar1 from "../images/avatar-nathan-peterson.webp";
import userAvatar2 from "../images/avatar-anna-kim.webp";

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
      <SimpleNotificationComponent
        activeClass=""
        userThumbnail={userAvatar1}
        userName="Nathan Peterson"
        notification="reacted to your recent post"
        reactionActivity="5 end-game strategies to increase your win rate"
        groupActivity=""
        time="2 weeks ago"
      />
      <SimpleNotificationComponent
        activeClass=""
        userThumbnail={userAvatar2}
        userName="Anna Kim"
        notification="left the group"
        reactionActivity=""
        groupActivity="Chess Club"
        time="2 weeks ago"
      />
    </div>
  );
};

export default NotificationPage;
