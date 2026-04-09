import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Settings() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="page center">
        <h2>Settings</h2>
        <p>Settings page coming soon.</p>
      </div>
    </div>
  );
}