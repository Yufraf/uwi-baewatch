import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Settings() {
  const navigate = useNavigate();

  const [ageRange, setAgeRange] = useState(
    localStorage.getItem("ageRange") || "18-26"
  );
  const [facultyPreference, setFacultyPreference] = useState(
    localStorage.getItem("facultyPreference") || "All"
  );
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showMe, setShowMe] = useState(
    localStorage.getItem("showMe") !== "false"
  );
  const [status, setStatus] = useState(
    localStorage.getItem("status") || "Looking for vibes ✨"
  );

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const saveSettings = () => {
    localStorage.setItem("ageRange", ageRange);
    localStorage.setItem("facultyPreference", facultyPreference);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("showMe", showMe);
    localStorage.setItem("status", status);
    alert("Settings saved");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <div className="settings-page">
        <div className="settings-container">
          <h2 className="settings-title">Settings</h2>
          <p className="settings-subtitle">Manage your account and preferences</p>

          <div className="settings-section">
            <h3>Account</h3>
            <div className="settings-card">
              <label>Status</label>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Enter your status"
              />
            </div>
          </div>

          <div className="settings-section">
            <h3>Discovery Preferences</h3>
            <div className="settings-card">
              <label>Preferred Age Range</label>
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
              >
                <option value="18-20">18-20</option>
                <option value="18-22">18-22</option>
                <option value="18-24">18-24</option>
                <option value="18-26">18-26</option>
                <option value="21-26">21-26</option>
              </select>

              <label>Faculty Preference</label>
              <select
                value={facultyPreference}
                onChange={(e) => setFacultyPreference(e.target.value)}
              >
                <option value="All">All</option>
                <option value="FST">FST</option>
                <option value="FSS">FSS</option>
                <option value="FHE">FHE</option>
                <option value="Medicine">Medicine</option>
                <option value="FFA">FFA</option>
                <option value="Law">Law</option>
              </select>

              <div className="toggle-row">
                <span>Show me on BAEWATCH</span>
                <button
                  className={showMe ? "toggle active" : "toggle"}
                  onClick={() => setShowMe(!showMe)}
                >
                  {showMe ? "On" : "Off"}
                </button>
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h3>Notifications</h3>
            <div className="settings-card">
              <div className="toggle-row">
                <span>Push Notifications</span>
                <button
                  className={notifications ? "toggle active" : "toggle"}
                  onClick={() => setNotifications(!notifications)}
                >
                  {notifications ? "On" : "Off"}
                </button>
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h3>App Appearance</h3>
            <div className="settings-card">
              <div className="toggle-row">
                <span>Dark Mode</span>
                <button
                  className={darkMode ? "toggle active" : "toggle"}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? "On" : "Off"}
                </button>
              </div>
            </div>
          </div>

          <div className="settings-actions">
            <button className="save-btn" onClick={saveSettings}>
              Save Changes
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}