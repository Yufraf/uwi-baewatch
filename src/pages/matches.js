export default function Matches() {
  const matches = JSON.parse(localStorage.getItem("matches")) || [];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Your Matches ❤️</h1>

      {matches.length === 0 ? (
        <p>No matches yet</p>
      ) : (
        matches.map((m, index) => (
          <div key={index}>
            <h3>{m.name}</h3>
            <p>{m.bio}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}