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
          age: user.dob.age,
          faculty: faculties[i % faculties.length],
          bio: bios[i % bios.length],
          image: user.picture.large
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleLike = () => {
  const currentUser = users[index];
  if (!currentUser) return;

  const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];
  const existingChats = JSON.parse(localStorage.getItem("chats")) || [];

  if (!existingMatches.some((match) => match.id === currentUser.id)) {
    existingMatches.push(currentUser);
    localStorage.setItem("matches", JSON.stringify(existingMatches));
  }

  if (!existingChats.some((chat) => chat.id === currentUser.id)) {
    existingChats.push(currentUser);
    localStorage.setItem("chats", JSON.stringify(existingChats));
  }

  setIndex(index + 1);
};

  return (
    <>
      <Navbar />
      <div className="page center">
        <h2 style={{ marginBottom: "20px" }}>Discover Students Near You</h2>

        {currentUser ? (
          <SwipeCard user={currentUser} />
        ) : (
          <div className="card">
            <h3>No more profiles to show</h3>
            <p>You've seen everyone!</p>
          </div>
        )}

        <div className="button-row">
          <button onClick={handlePass} style={{ background: "#f44336" }}>
            Pass
          </button>
          <button onClick={handleLike} style={{ background: "#8A9A7F" }}>
            Like ❤️
          </button>
        </div>
      </div>
    </>
  );
}