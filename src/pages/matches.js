export default function Matches() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            UWI BAEWATCH
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{fontSize:'1.2rem'}}>👤</span>
            </div>
        </nav>
        
        <div style={{padding:'20px', background:'#F5EDE3', minHeight:'calc(100vh - 60px)'}}>
            <h2 style={{textAlign:'center', marginBottom:'20px', fontFamily:'Georgia'}}>Your Matches</h2>
            
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>
                
                {/* Match Card 1 */}
                <div style={{padding:'15px', background:'white', borderRadius:'12px', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
                    <img src="https://picsum.photos/id/201/600/800" alt="Mia" style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'12px'}} />
                    <div style={{padding:'15px 10px'}}>
                        <h3 style={{fontFamily:'Georgia'}}>Mia • 20 • Humanities</h3>
                        <button style={{width:'100%', background:'#8A9A7F', color:'white', padding:'12px', border:'none', borderRadius:'8px', marginTop:'10px'}}>Message Mia</button>
                    </div>
                </div>
                
                {/* Match Card 2 */}
                <div style={{padding:'15px', background:'white', borderRadius:'12px', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
                    <img src="https://picsum.photos/id/1015/600/800" alt="Alex" style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'12px'}} />
                    <div style={{padding:'15px 10px'}}>
                        <h3 style={{fontFamily:'Georgia'}}>Alex • 21 • Science</h3>
                        <button style={{width:'100%', background:'#8A9A7F', color:'white', padding:'12px', border:'none', borderRadius:'8px', marginTop:'10px'}}>Message Alex</button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Bottom Navigation */}
        <div style={{position:'fixed', bottom:'0', left:'0', right:'0', background:'white', borderTop:'1px solid #ddd', display:'flex', justifyContent:'space-around', padding:'10px 0', fontFamily:'Georgia'}}>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>🏠 Home</button>
            <button style={{background:'none', border:'none', color:'#8A9A7F', fontSize:'1.1rem'}}>❤️ Matches</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>💬 Chat</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>👤 Profile</button>
        </div>
        </>
    );
}

import Navbar from "../components/Navbar";

export default function Matches() {
  const matches = JSON.parse(localStorage.getItem("matches")) || [];

  return (
    <div>
      <Navbar />
      <div className="page">
        <h2>Your Matches</h2>

        {matches.length === 0 ? (
          <p>No matches yet.</p>
        ) : (
          <div className="matches-grid">
            {matches.map((match, index) => (
              <div className="match-card" key={index}>
                <img src={match.image} alt={match.name} className="match-image" />
                <h3>{match.name}</h3>
                <p>{match.faculty}</p>
                <p>{match.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}