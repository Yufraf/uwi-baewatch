import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Matches() {
  const navigate = useNavigate();

  const matches = JSON.parse(localStorage.getItem("matches")) || [];

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="page">
        <h2>Your Matches</h2>

        {matches.length === 0 ? (
          <p>No matches yet.</p>
        ) : (
          <div className="matches-grid">
            {matches.map((match) => (
              <div className="match-card" key={match.id}>
                <img src={match.image} alt={match.name} className="match-image" />
                <h3>{match.name}</h3>
                <p>{match.faculty}</p>
                <p>{match.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}