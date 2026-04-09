export default function SwipeCard({ user }) {
  if (!user) {
    return <div className="card">No more profiles to show</div>;
  }

  return (
    <div className="card" style={{
      backgroundColor: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      margin: "15px auto",
      maxWidth: "380px",
      textAlign: "center"
    }}>
      <img 
        src={user.image} 
        alt={user.name} 
        style={{ 
          width: "100%", 
          height: "380px", 
          objectFit: "cover" 
        }} 
      />
      
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontFamily: "Georgia, serif", marginBottom: "5px" }}>
          {user.name}, {user.age}
        </h3>
        <p style={{ fontFamily: "Georgia, serif", color: "#666", marginBottom: "10px" }}>
          <strong>Faculty:</strong> {user.faculty}
        </p>
        <p style={{ fontFamily: "Georgia, serif", color: "#444" }}>
          {user.bio}
        </p>
      </div>
    </div>
  );
}