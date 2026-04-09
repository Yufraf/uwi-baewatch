import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>UWI BAEWATCH 💘</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}