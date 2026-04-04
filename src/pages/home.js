import { useState } from "react";
import { users } from "../data/users";
import Card from "../components/Card";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState([]);

  const handleLike = () => {
    setMatches([...matches, users[index]]);
    setIndex(index + 1);
  };

  const handleDislike = () => {
    setIndex(index + 1);
  };

  const goToMatches = () => {
    localStorage.setItem("matches", JSON.stringify(matches));
    window.location.href = "/matches";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Swipe 🔥</h1>

      <Card user={users[index]} />

      <br />

      <button onClick={handleDislike}>❌</button>
      <button onClick={handleLike}>❤️</button>

      <br /><br />

      <button onClick={goToMatches}>View Matches</button>
    </div>
  );
}