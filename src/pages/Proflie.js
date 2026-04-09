export default function Profile() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            UWI BAEWATCH
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{fontSize:'1.2rem'}}>👤</span>
            </div>
        </nav>
        
        <div style={{padding:'20px', background:'#F5EDE3', minHeight:'calc(100vh - 60px)', textAlign:'center'}}>
            <div style={{maxWidth:'400px', margin:'0 auto', padding:'30px', background:'white', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
                <img src="https://picsum.photos/id/64/300/300" alt="Profile" style={{width:'180px', height:'180px', borderRadius:'50%', objectFit:'cover', marginBottom:'20px'}} />
                
                <h2 style={{fontFamily:'Georgia', marginBottom:'5px'}}>Alex Rivera</h2>
                <p style={{color:'#666', marginBottom:'20px'}}>Year 2 • Faculty of Science</p>
                
                <p style={{marginBottom:'25px'}}>Love hiking, music, and late-night study sessions with good company.</p>
                
                <div style={{display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center', marginBottom:'30px'}}>
                    <span style={{background:'#A8B5A0', color:'white', padding:'6px 14px', borderRadius:'20px', fontSize:'0.9rem'}}>Hiking</span>
                    <span style={{background:'#A8B5A0', color:'white', padding:'6px 14px', borderRadius:'20px', fontSize:'0.9rem'}}>Music</span>
                    <span style={{background:'#A8B5A0', color:'white', padding:'6px 14px', borderRadius:'20px', fontSize:'0.9rem'}}>Coffee</span>
                    <span style={{background:'#A8B5A0', color:'white', padding:'6px 14px', borderRadius:'20px', fontSize:'0.9rem'}}>Reading</span>
                </div>
                
                <button style={{background:'#8A9A7F', color:'white', padding:'12px 30px', border:'none', borderRadius:'8px', width:'100%'}}>Edit Profile</button>
            </div>
        </div>
        
        {/* Bottom Navigation */}
        <div style={{position:'fixed', bottom:'0', left:'0', right:'0', background:'white', borderTop:'1px solid #ddd', display:'flex', justifyContent:'space-around', padding:'10px 0', fontFamily:'Georgia'}}>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>🏠 Home</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>❤️ Matches</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>💬 Chat</button>
            <button style={{background:'none', border:'none', color:'#8A9A7F', fontSize:'1.1rem'}}>👤 Profile</button>
        </div>
        </>
    );
}

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [name, setName] = useState(localStorage.getItem("currentUser") || "");
  const [bio, setBio] = useState(localStorage.getItem("userBio") || "");
  const [faculty, setFaculty] = useState(localStorage.getItem("userFaculty") || "");

  const saveProfile = () => {
    localStorage.setItem("currentUser", name);
    localStorage.setItem("userBio", bio);
    localStorage.setItem("userFaculty", faculty);
    alert("Profile saved");
  };

  return (
    <div>
      <Navbar />
      <div className="page center">
        <h2>Edit Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
        <textarea
          placeholder="Write your bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button onClick={saveProfile}>Save Profile</button>
      </div>
    </div>
  );
}