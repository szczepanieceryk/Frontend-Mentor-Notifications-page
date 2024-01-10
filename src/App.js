import { useState } from "react";

import NotificationPage from "./pages/NotificationPage";
import notificationsData from "./NotificationData";

import "./styles/style.css";

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <div className="app-wrapper">
      <NotificationPage
        notificationCount={notificationCount}
        setNotificationCount={setNotificationCount}
        notificationsData={notificationsData}
      />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/szczepanieceryk">Eryk Szczepaniec</a>.
      </div>
    </div>
  );
};

export default App;
