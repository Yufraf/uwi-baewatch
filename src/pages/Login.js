export default function Login() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem', display:'flex', alignItems:'center'}}>
            UWI BAEWATCH
        </nav>
        
        <div style={{background:'#F5EDE3', minHeight:'calc(100vh - 60px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px'}}>
            <div style={{background:'white', padding:'40px 30px', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.1)', maxWidth:'420px', width:'100%'}}>
                
                <h2 style={{fontFamily:'Georgia', textAlign:'center', marginBottom:'30px', color:'#3C2F2F'}}>
                    Welcome Back
                </h2>
                
                <input 
                    type="email" 
                    placeholder="UWI Email Address" 
                    style={{width:'100%', padding:'14px', marginBottom:'15px', border:'2px solid #A8B5A0', borderRadius:'8px', fontFamily:'Georgia', fontSize:'1rem'}} />
                
                <input 
                    type="password" 
                    placeholder="Password" 
                    style={{width:'100%', padding:'14px', marginBottom:'25px', border:'2px solid #A8B5A0', borderRadius:'8px', fontFamily:'Georgia', fontSize:'1rem'}} />
                
                <button 
                    style={{width:'100%', background:'#8A9A7F', color:'white', padding:'14px', border:'none', borderRadius:'8px', fontFamily:'Georgia', fontSize:'1.1rem', cursor:'pointer'}}>
                    Login
                </button>
                
                <div style={{textAlign:'center', marginTop:'20px'}}>
                    <a href="#" style={{color:'#8A9A7F', textDecoration:'none'}}>Forgot Password?</a>
                </div>
                
                <div style={{textAlign:'center', marginTop:'30px', fontFamily:'Georgia'}}>
                    Don’t have an account? 
                    <a href="/signup" style={{color:'#8A9A7F', fontWeight:'bold'}}>Sign up here</a>
                </div>
            </div>
        </div>
        </>
    );
}

