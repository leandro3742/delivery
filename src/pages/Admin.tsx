import { useState, useEffect, useRef } from "react";

interface ChatMessage {
  username: string;
  message: string;
}

interface ServerMessage {
  event: "update-users" | "send-message";
  usernames?: string[];
  username?: string;
  message?: string;
}

const Admin = () => {
  const [myUsername, setMyUsername] = useState<string>("Anonymous");
  const [userList, setUserList] = useState<string[]>([]);
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const socketRef = useRef<WebSocket>();

  useEffect(() => {
    const username = prompt("Please enter your name") || "Anonymous";
    console.log(username)
    setMyUsername(username);
  }, []);

  useEffect(() => {
    if (myUsername != 'Anonymous' && !socketRef.current) {
      const socket = new WebSocket(
        `ws://localhost:8080/start_web_socket?username=${myUsername}`
      );
      socketRef.current = socket;
      socket.onmessage = (event: MessageEvent) => {
        const data: ServerMessage = JSON.parse(event.data);
        switch (data.event) {
          case "update-users":
            setUserList(data.usernames ?? []);
            break;
          case "send-message":
            if (data.username && data.message) {
              const newMessage: ChatMessage = {
                username: data.username,
                message: data.message,
              };
              setChatLog((prevLog) => [...prevLog, newMessage]);
            }
            break;
        }
      };
    }
  }, [myUsername]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const message = inputText.trim();
      if (message && socketRef.current) {
        socketRef.current.send(
          JSON.stringify({
            event: "send-message",
            message: message,
          })
        );
        setInputText("");
      }
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <h2>User List</h2>
        <ul>
          {userList.map((username) => (
            <li key={username}>{username}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Chat Log</h2>
        <div>
          {chatLog.map((message, i) => (
            <div key={i}>
              <b>{message.username}: </b>
              {message.message}
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
};
export default Admin