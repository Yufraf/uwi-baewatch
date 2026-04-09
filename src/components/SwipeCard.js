export default function SwipeCard({ user }) {
  if (!user) {
    return <div className="card">No more profiles</div>;
  }

  return (
    <div className="card">
      <img src={user.image} alt={user.name} className="card-image" />
      <h3>{user.name}, {user.age}</h3>
      <p><strong>Faculty:</strong> {user.faculty}</p>
      <p>{user.bio}</p>
    </div>
  );
}