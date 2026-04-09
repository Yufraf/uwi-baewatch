import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );
  const [status, setStatus] = useState(
    localStorage.getItem("status") || "Single and vibing 😌"
  );

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const saveSettings = () => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("status", status);
    alert("Settings saved");
  };

  return (
    <div>
      <Navbar />
      <div className="page center">
        <h2>Settings</h2>

        <label style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />{" "}
          Enable Dark Mode
        </label>

        <label style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />{" "}
          Enable Notifications
        </label>

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <button onClick={saveSettings}>Save Settings</button>
      </div>
    </div>
  );
}