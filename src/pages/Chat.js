export default function Chat() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            UWI BAEWATCH
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{fontSize:'1.2rem'}}>👤</span>
            </div>
        </nav>
        
        <div style={{display:'flex', height:'calc(100vh - 60px)', background:'#F5EDE3'}}>
            
            {/* Conversation List */}
            <div style={{width:'300px', background:'white', borderRight:'1px solid #ddd', padding:'15px'}}>
                <h3 style={{marginBottom:'15px', fontFamily:'Georgia'}}>Messages</h3>
                <div style={{padding:'12px', background:'#F5EDE3', borderRadius:'8px', marginBottom:'10px'}}>
                    <strong>Mia</strong><br />
                    <small>See you at the library?</small>
                </div>
                <div style={{padding:'12px', background:'#F5EDE3', borderRadius:'8px'}}>
                    <strong>Alex</strong><br />
                    <small>Thanks for the notes!</small>
                </div>
            </div>
            
            {/* Chat Window */}
            <div style={{flex:'1', display:'flex', flexDirection:'column'}}>
                <div style={{padding:'15px', background:'white', borderBottom:'1px solid #ddd'}}>
                    <strong>Chatting with Mia</strong>
                </div>
                
                <div style={{flex:'1', padding:'20px', overflowY:'auto', background:'#F5EDE3'}}>
                    <div style={{background:'white', padding:'12px', borderRadius:'12px', maxWidth:'70%', marginBottom:'15px'}}>
                        Hey! Are you free this evening?
                    </div>
                    <div style={{background:'#8A9A7F', color:'white', padding:'12px', borderRadius:'12px', maxWidth:'70%', marginBottom:'15px', marginLeft:'auto'}}>
                        Yes, want to study together?
                    </div>
                </div>
                
                <div style={{padding:'15px', background:'white', borderTop:'1px solid #ddd'}}>
                    <input type="text" placeholder="Type a message..." style={{width:'100%', padding:'12px', border:'2px solid #A8B5A0', borderRadius:'8px'}} />
                </div>
            </div>
        </div>
        
        {/* Bottom Navigation */}
        <div style={{position:'fixed', bottom:'0', left:'0', right:'0', background:'white', borderTop:'1px solid #ddd', display:'flex', justifyContent:'space-around', padding:'10px 0', fontFamily:'Georgia'}}>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>🏠 Home</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>❤️ Matches</button>
            <button style={{background:'none', border:'none', color:'#8A9A7F', fontSize:'1.1rem'}}>💬 Chat</button>
            <button style={{background:'none', border:'none', color:'#666', fontSize:'1.1rem'}}>👤 Profile</button>
        </div>
        </>
    );
}
