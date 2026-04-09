import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("currentUser", name || "New User");
    navigate("/login");
  };

  return (
    <div className="page center">
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignup}>Create Account</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}