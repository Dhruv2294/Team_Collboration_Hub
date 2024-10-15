
import React, { useState } from 'react';


const ChatList = ({ chats, onSelectChat }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="chat-list">
     
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            {filteredChats.map((chat, index) => (
                <div key={index} className="chat-item" onClick={() => onSelectChat(chat)}>
                    <img src={chat.avatar} alt={`${chat.name}'s avatar`} className="avatar" />
                    <div className="chat-info">
                        <strong>{chat.name}</strong>
                        <p>{chat.lastMessage}</p>
                        <small className="last-seen">{chat.lastSeen}</small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
