import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Chat() {
  const navigate = useNavigate();
  const chats = JSON.parse(localStorage.getItem("chats")) || [];
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const sendMessage = () => {
    if (!message.trim() || !selectedChat) return;

    const updatedMessages = {
      ...messages,
      [selectedChat.id]: [
        ...(messages[selectedChat.id] || []),
        { text: message, sender: "You" }
      ]
    };

    setMessages(updatedMessages);
    setMessage("");
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <h2>Chats</h2>

        {chats.length === 0 ? (
          <p>No chats yet. Like someone first from the home page.</p>
        ) : (
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ width: "30%" }}>
              <h3>People</h3>
              {chats.map((person) => (
                <div
                  key={person.id}
                  onClick={() => setSelectedChat(person)}
                  style={{
                    padding: "10px",
                    marginBottom: "10px",
                    background: "#fff",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                  <p>{person.name}</p>
                </div>
              ))}
            </div>

            <div style={{ width: "70%" }}>
              {selectedChat ? (
                <>
                  <h3>Chat with {selectedChat.name}</h3>

                  <div
                    style={{
                      minHeight: "250px",
                      background: "#fff",
                      padding: "15px",
                      borderRadius: "10px",
                      marginBottom: "10px"
                    }}
                  >
                    {(messages[selectedChat.id] || []).length === 0 ? (
                      <p>No messages yet.</p>
                    ) : (
                      messages[selectedChat.id].map((msg, index) => (
                        <p key={index}>
                          <strong>{msg.sender}:</strong> {msg.text}
                        </p>
                      ))
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button onClick={sendMessage}>Send</button>
                </>
              ) : (
                <p>Select a person to start chatting.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}