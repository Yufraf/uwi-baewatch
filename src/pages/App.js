import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './pages/landing.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/home.js';
import Matches from './pages/matches.js';
import Chat from './pages/chat.js';
import Profile from './pages/profile.js';
import Settings from './pages/settings.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;