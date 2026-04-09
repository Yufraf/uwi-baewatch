export default function Home() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            UWI BAEWATCH
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{fontSize:'1.2rem'}}>👤</span>
            </div>
        </nav>
        
        <div style={{background:'#F5EDE3', padding:'20px', minHeight:'calc(100vh - 60px)'}}>
            
            <h2 style={{fontFamily:'Georgia', textAlign:'center', marginBottom:'20px', color:'#3C2F2F'}}>
                Discover Students Near You
            </h2>
            
            {/* Example Profile Cards (Discovery Feed) */}
            <div style={{display:'flex', flexDirection:'column', gap:'20px', maxWidth:'400px', margin:'0 auto'}}>
                
                {/* Card 1 */}
                <div style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
                    <img src="https://picsum.photos/id/1011/600/800" alt="Student" style={{width:'100%', height:'380px', objectFit:'cover'}} />
                    <div style={{padding:'15px'}}>
                        <h3 style={{fontFamily:'Georgia', marginBottom:'5px'}}>Alex • 21 • Science</h3>
                        <p style={{fontFamily:'Georgia', fontSize:'1rem', color:'#666'}}>Love hiking, music, and late-night study sessions</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-around', padding:'15px', borderTop:'1px solid #eee'}}>
                        <button style={{background:'#f44336', color:'white', border:'none', width:'60px', height:'60px', borderRadius:'50%', fontSize:'28px'}}>❌</button>
                        <button style={{background:'#8A9A7F', color:'white', border:'none', width:'60px', height:'60px', borderRadius:'50%', fontSize:'28px'}}>❤️</button>
                    </div>
                </div>
                
                {/* Card 2 (smaller for demo) */}
                <div style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
                    <img src="https://picsum.photos/id/201/600/800" alt="Student" style={{width:'100%', height:'380px', objectFit:'cover'}} />
                    <div style={{padding:'15px'}}>
                        <h3 style={{fontFamily:'Georgia', marginBottom:'5px'}}>Mia • 20 • Humanities</h3>
                        <p style={{fontFamily:'Georgia', fontSize:'1rem', color:'#666'}}>Coffee lover & aspiring writer</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Bottom Navigation */}
        <div style={{position:'fixed', bottom:'0', left:'0', right:'0', background:'white', borderTop:'1px solid #ddd', display:'flex', justifyContent:'space-around', padding:'10px 0', fontFamily:'Georgia'}}>
            <button style={{background:'none', border:'none', color:'#8A9A7F', fontSize:'1.1rem'}}>🏠 Home</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>❤️ Matches</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>💬 Chat</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>👤 Profile</button>
        </div>
        </>
    );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SwipeCard from "../components/SwipeCard";
import { users } from "../data/users";

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLike = () => {
    const currentUser = users[index];
    const existingMatches =
      JSON.parse(localStorage.getItem("matches")) || [];
    existingMatches.push(currentUser);
    localStorage.setItem("matches", JSON.stringify(existingMatches));
    setIndex(index + 1);
  };

  const handleDislike = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="page center">
        <h2>Discover People</h2>
        <SwipeCard user={users[index]} />

        {users[index] && (
          <div className="button-row">
            <button onClick={handleDislike}>❌ Pass</button>
            <button onClick={handleLike}>❤️ Like</button>
          </div>
        )}
      </div>
    </div>
  );
}
