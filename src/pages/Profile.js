import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [name, setName] = useState(localStorage.getItem("currentUser") || "");
  const [bio, setBio] = useState(localStorage.getItem("userBio") || "");
  const [faculty, setFaculty] = useState(localStorage.getItem("userFaculty") || "");

  const saveProfile = () => {
    localStorage.setItem("currentUser", name);
    localStorage.setItem("userBio", bio);
    localStorage.setItem("userFaculty", faculty);
    alert("Profile saved");
  };

  return (
    <div>
      <Navbar />
      <div className="page center">
        <h2>Edit Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
        <textarea
          placeholder="Write your bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button onClick={saveProfile}>Save Profile</button>
      </div>
    </div>
  );
}