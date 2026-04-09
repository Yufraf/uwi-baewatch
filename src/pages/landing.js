import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="page center">
      <h1>UWI BAEWATCH 💘</h1>
      <p>Find your campus match at UWI St. Augustine.</p>
      <p>Swipe, match, and connect with other students.</p>

      <div className="button-row">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
