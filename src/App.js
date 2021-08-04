import React from "react";
import { Appbar } from "./appbar";
import { ChatList } from "./chatList";
import { Profile } from "./profile";
import { Message } from "./message";
import dp from "./assets/dp.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Appbar />
      <div className="chat-box-body">
        <div className="chatBox chatbox1">
          <ChatList />
        </div>
        <div className="chatBox chatbox2">
          <div className="chatbox2-ins">
            <div>
              <Message />
              <Message received={true} />
              <Message />
              <Message received={true} />
              <Message />
              <Message received={true} />
            </div>
          </div>
          <div className="chatBox2-top">
            <p>online</p>
            <div>
              <p className="chat-profile-text">john doe</p>
              <img className="dp" src={dp} alt="chat profile" />
            </div>
          </div>
          <div className="chatBox2-bottom">
            <textarea
              style={{
                width: "95%",
                resize: "none",
                borderRadius: "4px",
                padding: "5px",
                height: "2rem",
              }}
            />
            <RiSendPlaneFill size={25} color="#fff" />
          </div>
        </div>
        <div className="chatBox">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
