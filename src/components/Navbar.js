import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{
            backgroundColor: "#8A9A7F",   // Sage Green
            color: "white",
            padding: "15px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Georgia, serif",
            fontSize: "1.4rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            
            {/* Logo */}
            <div style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                UWI BAEWATCH 💘
            </div>

            {/* Navigation Links */}
            <div style={{
                display: "flex",
                gap: "25px",
                fontSize: "1.1rem"
            }}>
                <Link to="/home" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                <Link to="/matches" style={{ color: "white", textDecoration: "none" }}>Matches</Link>
                <Link to="/chat" style={{ color: "white", textDecoration: "none" }}>Chat</Link>
                <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
                <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Logout</Link>
            </div>
        </nav>
    );
}