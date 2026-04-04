export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
}
const handleLogin = () => {
  if (email === "bob@mail.com" && password === "bobpass") {
    window.location.href = "/home";
  }
};