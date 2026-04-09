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

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUser =
      emailOrUsername === "bob" || emailOrUsername === "bob@mail.com";

    if (validUser && password === "bobpass") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", "Bob");
      navigate("/home");
    } else {
      setMessage("Invalid login. Try bob or bob@mail.com with bobpass");
    }
  };

  return (
    <div className="page center">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username or Email"
        value={emailOrUsername}
        onChange={(e) => setEmailOrUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}