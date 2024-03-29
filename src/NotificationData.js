import userAvatar1 from "./images/avatar-mark-webber.webp";
import userAvatar2 from "./images/avatar-angela-gray.webp";
import userAvatar3 from "./images/avatar-jacob-thompson.webp";
import userAvatar5 from "./images/avatar-rizky-hasanuddin.webp";
import userAvatar6 from "./images/avatar-nathan-peterson.webp";
import userAvatar7 from "./images/avatar-anna-kim.webp";

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
    id: 5,
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
    id: 6,
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

export default notificationsData;
