export default function Settings() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem'}}>
            UWI BAEWATCH
        </nav>
        
        <div style={{padding:'20px', background:'#F5EDE3', minHeight:'calc(100vh - 60px)'}}>
            <h2 style={{fontFamily:'Georgia', marginBottom:'20px', color:'#3C2F2F'}}>Settings</h2>
            
            <div style={{background:'white', borderRadius:'12px', padding:'25px', maxWidth:'500px', margin:'0 auto', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
                
                <div style={{marginBottom:'25px'}}>
                    <label style={{display:'block', marginBottom:'8px', fontFamily:'Georgia'}}>Notifications</label>
                    <label style={{display:'block', marginBottom:'8px'}}><input type="checkbox" checked style={{marginRight:'8px'}} /> Email notifications</label>
                    <label style={{display:'block'}}><input type="checkbox" checked style={{marginRight:'8px'}} /> New match alerts</label>
                </div>
                
                <div style={{marginBottom:'25px'}}>
                    <label style={{display:'block', marginBottom:'8px', fontFamily:'Georgia'}}>Dark Mode</label>
                    <label><input type="checkbox" style={{marginRight:'8px'}} /> Enable dark mode</label>
                </div>
                
                <div style={{marginBottom:'25px'}}>
                    <label style={{display:'block', marginBottom:'8px', fontFamily:'Georgia'}}>Privacy</label>
                    <label><input type="checkbox" checked style={{marginRight:'8px'}} /> Show my profile to other UWI students</label>
                </div>
                
                <button style={{width:'100%', background:'#f44336', color:'white', padding:'14px', border:'none', borderRadius:'8px', fontFamily:'Georgia'}}>
                    Logout
                </button>
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