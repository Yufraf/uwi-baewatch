import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Login from "./Login";
import Signup from "./signup";
import Home from "./home";
import Matches from "./matches";
import Chat from "./Chat";
import Profile from "./Proflie";
import Settings from "./Settings";

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