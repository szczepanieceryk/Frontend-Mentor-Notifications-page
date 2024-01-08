import { useState } from "react";
import NotificationPage from "./pages/NotificationPage";
import "./styles/style.css";

import userAvatar1 from "./images/avatar-nathan-peterson.webp";
import userAvatar2 from "./images/avatar-anna-kim.webp";
import userAvatar3 from "./images/avatar-mark-webber.webp";
import userAvatar4 from "./images/avatar-angela-gray.webp";
import userAvatar5 from "./images/avatar-jacob-thompson.webp";

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const oldNotifications = [
    {
      id: 1,
      activeClass: "",
      userThumbnail: userAvatar1,
      userName: "Nathan Peterson",
      notification: "reacted to your recent post",
      reactionActivity: "5 end-game strategies to increase your win rate",
      groupActivity: "",
      time: "2 weeks ago",
    },
    {
      id: 2,
      activeClass: "",
      userThumbnail: userAvatar2,
      userName: "Anna Kim",
      notification: "left the group",
      reactionActivity: "",
      groupActivity: "Chess Club",
      time: "2 weeks ago",
    },
  ];

  const activeNotifications = [
    {
      id: 1,
      activeClass: "active",
      userThumbnail: userAvatar3,
      userName: "Mark Webber",
      notification: "reacted to your recent post",
      reactionActivity: "My first tournament today!",
      groupActivity: "",
      time: "1m ago",
    },
    {
      id: 2,
      activeClass: "active",
      userThumbnail: userAvatar4,
      userName: "Angela Gray",
      notification: "followed you",
      reactionActivity: "",
      groupActivity: "",
      time: "5m ago",
    },
    {
      id: 3,
      activeClass: "active",
      userThumbnail: userAvatar5,
      userName: "Jacob Thompson",
      notification: "has joined your group",
      reactionActivity: "",
      groupActivity: "Chess Club",
      time: "1 day ago",
    },
  ];
  return (
    <div className="App">
      <NotificationPage
        notificationCount={notificationCount}
        setNotificationCount={setNotificationCount}
        newNotifications={activeNotifications}
        oldNotifications={oldNotifications}
      />
    </div>
  );
};

export default App;
