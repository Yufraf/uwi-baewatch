export default function Landing() {
    return (
        <>
        <nav style={{background:'#8A9A7F', color:'white', padding:'15px 20px', fontFamily:'Georgia', fontSize:'1.5rem'}}>
            UWI BAEWATCH
        </nav>
        
        <div style={{background:'#F5EDE3', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px', textAlign:'center'}}>
            <div style={{maxWidth:'500px'}}>
                <h1 style={{fontFamily:'Georgia', fontSize:'3rem', marginBottom:'20px', color:'#3C2F2F'}}>
                    Find your campus connection
                </h1>
                <p style={{fontFamily:'Georgia', fontSize:'1.4rem', marginBottom:'40px', color:'#3C2F2F'}}>
                    Safe • Local • UWI Students Only
                </p>
                
                <div style={{display:'flex', gap:'15px', justifyContent:'center', flexWrap:'wrap'}}>
                    <a href="/login" 
                       style={{background:'#8A9A7F', color:'white', padding:'15px 30px', borderRadius:'8px', textDecoration:'none', fontFamily:'Georgia', fontSize:'1.2rem'}}>
                        Login
                    </a>
                    <a href="/signup" 
                       style={{background:'#A8B5A0', color:'white', padding:'15px 30px', borderRadius:'8px', textDecoration:'none', fontFamily:'Georgia', fontSize:'1.2rem'}}>
                        Join Free
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="page center">
      <h1>UWI BAEWATCH 💘</h1>
      <p>Find your campus match at UWI St. Augustine.</p>
      <p>Swipe, match, and connect with other students.</p>

      <div className="button-row">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}