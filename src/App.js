import { useState } from "react";

import NotificationPage from "./pages/NotificationPage";
import notificationsData from "./NotificationData";

import "./styles/style.css";
import Footer from "./pages/Footer";

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);

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
