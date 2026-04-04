export default function Card({ user }) {
  if (!user) return <h2>No more profiles 😢</h2>;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "250px",
        margin: "auto",
        borderRadius: "10px",
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}