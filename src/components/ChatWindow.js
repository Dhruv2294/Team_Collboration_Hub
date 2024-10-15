
import React from 'react';

const ChatWindow = ({ messages, activeChat }) => {
    return (
        <div className="chat-window">
            
          
            <div className="chat-header">
                <img src={activeChat.avatar} alt={`${activeChat.name}'s avatar`} className="avatar" />
                <h2>{activeChat.name}</h2>
            </div>
            <div className="message-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.isUser ? 'sent' : 'received'}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatWindow;
