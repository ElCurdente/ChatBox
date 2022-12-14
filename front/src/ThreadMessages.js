import React, { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import defaultImg from './assets/images/default.jpg';



function ThreadMessages({ messages,  socket, spotifyUser }) {
    return (
      <div className="thread-messages">
        {messages
          .sort((a, b) => a.time - b.time)
          .slice(messages.length - 8, messages.length)
          .map((message) => (
            <div key={message.id} className={`message ${message.user.id == socket.id ? "message-me" : "message-other"}`}>
              <div>
                <img className="profile-random" src={`${message.user.id == socket.id ? spotifyUser.images && spotifyUser?.images[0].url : defaultImg}`} alt="profile-random" />
              </div>
              <div className="message-content">
                <div className="message-username">{message.user.name} : </div>
                <div className="message-text">{message.value} </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  export default ThreadMessages;