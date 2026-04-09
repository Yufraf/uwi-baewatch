import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUser =
      emailOrUsername === "bob" || emailOrUsername === "bob@mail.com";

    if (validUser && password === "bobpass") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", "Bob");
      navigate("/home");
    } else {
      setMessage("Invalid login. Try bob or bob@mail.com with bobpass");
    }
  };

  return (
    <div className="page center">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username or Email"
        value={emailOrUsername}
        onChange={(e) => setEmailOrUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}