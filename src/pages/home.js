import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import SwipeCard from "../components/SwipeCard";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=10");

        const faculties = ["FST", "FSS", "FHE", "Medicine", "FFA", "Law"];

const bios = [
  "Always down for doubles and a good lime.",
  "Study hard, lime harder 😎",
  "Looking for someone to survive exams with.",
  "Gym, food, and vibes.",
  "Catch me by UWI gym or library.",
  "Music, movies, and campus life 🎶",
  "Trying to pass courses and find love 💀",
  "Beach limes > everything else",
  "Future CEO (hopefully 😂)",
  "Just here for the vibes"
];

const formattedUsers = res.data.results.map((user, i) => ({
  id: i + 1,
  name: `${user.name.first} ${user.name.last}`,
  age: Math.floor(Math.random() * (26 - 18 + 1)) + 18,
  faculty: faculties[Math.floor(Math.random() * faculties.length)],
  bio: bios[Math.floor(Math.random() * bios.length)],
  image: user.picture.large
}));

        setUsers(formattedUsers);
      } catch (err) {
        console.log("API error:", err);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleLike = () => {
    const currentUser = users[index];
    if (!currentUser) return;

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

        {users.length === 0 ? (
          <p>Loading profiles...</p>
        ) : (
          <>
            <SwipeCard user={users[index]} />
            {users[index] && (
              <div className="button-row">
                <button onClick={handleDislike}>❌ Pass</button>
                <button onClick={handleLike}>❤️ Like</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}