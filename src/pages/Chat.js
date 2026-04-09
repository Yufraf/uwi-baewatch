import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Chat() {
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
        <h2>Chats</h2>
        <p>Chat feature coming soon.</p>
      </div>
    </div>
  );
}
