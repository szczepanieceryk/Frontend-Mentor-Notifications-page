import { useState } from "react";

import NotificationPage from "./pages/NotificationPage";

import userAvatar1 from "./images/avatar-mark-webber.webp";
import userAvatar2 from "./images/avatar-angela-gray.webp";
import userAvatar3 from "./images/avatar-jacob-thompson.webp";
import userAvatar4 from "./images/avatar-kimberly-smith.webp";
import user4ReactImage from "./images/image-chess.webp";
import userAvatar5 from "./images/avatar-rizky-hasanuddin.webp";
import userAvatar6 from "./images/avatar-nathan-peterson.webp";
import userAvatar7 from "./images/avatar-anna-kim.webp";

import "./styles/style.css";

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const notificationsData = [
    {
      id: 1,
      activeClass: "active",
      userThumbnail: userAvatar1,
      userName: "Mark Webber",
      notification: "reacted to your recent post",
      reactionActivity: "My first tournament today!",
      reactionImg: "",
      groupActivity: "",
      time: "1m ago",
      message: "",
    },
    {
      id: 2,
      activeClass: "active",
      userThumbnail: userAvatar2,
      userName: "Angela Gray",
      notification: "followed you",
      reactionActivity: "",
      groupActivity: "",
      time: "5m ago",
      message: "",
    },
    {
      id: 3,
      activeClass: "active",
      userThumbnail: userAvatar3,
      userName: "Jacob Thompson",
      notification: "has joined your group",
      reactionActivity: "",
      reactionImg: "",
      groupActivity: "Chess Club",
      time: "1 day ago",
      message: "",
    },
    {
      id: 4,
      activeClass: "",
      userThumbnail: userAvatar4,
      userName: "Kimberly Smith",
      notification: "commented on your picture",
      reactionActivity: "",
      reactionImg: user4ReactImage,
      groupActivity: "",
      time: "1 week ago",
      message: "",
    },
    {
      id: 5,
      activeClass: "",
      userThumbnail: userAvatar5,
      userName: "Rizky Hasanuddin",
      notification: "sent you a private message",
      reactionActivity: "",
      reactionImg: "",
      groupActivity: "",
      time: "5 days ago",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      id: 6,
      activeClass: "",
      userThumbnail: userAvatar6,
      userName: "Nathan Peterson",
      notification: "reacted to your recent post",
      reactionActivity: "5 end-game strategies to increase your win rate",
      reactionImg: "",
      groupActivity: "",
      time: "2 weeks ago",
      message: "",
    },
    {
      id: 7,
      activeClass: "",
      userThumbnail: userAvatar7,
      userName: "Anna Kim",
      notification: "left the group",
      reactionActivity: "",
      reactionImg: "",
      groupActivity: "Chess Club",
      time: "2 weeks ago",
      message: "",
    },
  ];
  return (
    <div className="App">
      <NotificationPage
        notificationCount={notificationCount}
        setNotificationCount={setNotificationCount}
        notificationsData={notificationsData}
      />
    </div>
  );
};

export default App;
