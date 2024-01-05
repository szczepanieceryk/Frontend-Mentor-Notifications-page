import { useState } from "react";
import NotificationPage from "./pages/NotificationPage";
import "./styles/style.css";

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  return (
    <div className="App">
      <NotificationPage
        notificationCount={notificationCount}
        setNotificationCount={setNotificationCount}
      />
    </div>
  );
};

export default App;
