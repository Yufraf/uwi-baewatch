import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Matches() {
  const navigate = useNavigate();
  const [matches, setMatches] = useState(
    JSON.parse(localStorage.getItem("matches")) || []
  );

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const removeMatch = (id) => {
    const updatedMatches = matches.filter((match) => match.id !== id);
    setMatches(updatedMatches);
    localStorage.setItem("matches", JSON.stringify(updatedMatches));

    const chats = JSON.parse(localStorage.getItem("chats")) || [];
    const updatedChats = chats.filter((chat) => chat.id !== id);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
  };

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
                <p className="faculty-badge">{match.faculty}</p>
                <p>{match.bio}</p>
                <button onClick={() => removeMatch(match.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}