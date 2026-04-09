import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SwipeCard from "../components/SwipeCard";
import { users } from "../data/users";

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLike = () => {
    const currentUser = users[index];
    const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];

    if (!existingMatches.some((match) => match.id === currentUser.id)) {
      existingMatches.push(currentUser);
      localStorage.setItem("matches", JSON.stringify(existingMatches));
    }

    setIndex(index + 1);
  };

  const handleDislike = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="page center">
        <h2>Discover People</h2>
        <SwipeCard user={users[index]} />

        {users[index] && (
          <div className="button-row">
            <button onClick={handleDislike}>❌ Pass</button>
            <button onClick={handleLike}>❤️ Like</button>
          </div>
        )}
      </div>
    </div>
  );
}