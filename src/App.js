import { useState } from "react";

import NotificationPage from "./pages/NotificationPage";
import notificationsData from "./NotificationData";

import "./styles/style.css";
import Footer from "./pages/Footer";

const App = () => {
  // Get number of active notifications & use it to set up default state value
  const activeNotificationCount = () => {
    return notificationsData.filter(
      (notification) => notification.activeClass === "active"
    ).length;
  };

  const [notificationCount, setNotificationCount] = useState(
    activeNotificationCount()
  );

  return (
    <div className="app-wrapper">
      <NotificationPage
        notificationCount={notificationCount}
        setNotificationCount={setNotificationCount}
        notificationsData={notificationsData}
      />
      <Footer />
    </div>
  );
};

export default App;
