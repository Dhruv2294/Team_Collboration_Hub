import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import Login from './Login'; 
import Dashboard from '../components/Dashboard';
import '../App.css';

const App = () => {
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    
    const chats = [
        { name: 'Shyam', avatar: 'https://cdn.pixabay.com/photo/2024/03/15/19/51/ai-generated-8635685_640.png', lastMessage: 'last seen 10:36!' },
        { name: 'Krina', avatar: 'https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-43853.jpg', lastMessage: 'last seen 19:30' },
        { name: 'Prince', avatar: 'https://img.freepik.com/premium-photo/3d-cute-boy-wearing-blue-jacket-blue-sunglasses-blue-background-ai-generative_235382-159.jpg', lastMessage: 'last seen 20:40' },
        { name: 'Nandini', avatar: 'https://img.freepik.com/premium-photo/cute-cartoon-girl-character_734126-789.jpg', lastMessage: 'last seen 08:56' },
        { name: 'Harmish', avatar: 'https://static.vecteezy.com/system/resources/previews/029/364/940/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg', lastMessage: 'last seen 15:15' },
        { name: 'Nency', avatar: 'https://thumbs.dreamstime.com/b/ai-generated-illustration-adorable-cartoon-girl-white-background-ai-generated-illustration-adorable-cartoon-316619838.jpg', lastMessage: 'last seen 03:00' },
    ];

   
    const chatMessages = {
        'Shyam': [
            { text: 'Hey !', user: 'Harmish', isUser: false },
            { text: 'Hii', user: 'You', isUser: true },
            { text: 'Can We Meet tomorrow?', user: 'Harmish', isUser: false },
            { text: 'Yaa Sure Why Not ?', user: 'You', isUser: false },
        ],
        'Krina': [
            { text: 'Did you finish the project?', user: 'Nandini', isUser: false },
            { text: 'Yes', user: 'You', isUser: true },
        ],
        'Prince': [
            { text: 'How Are You ', user: 'Krina', isUser: false },
            { text: 'I’ll be Fine!', user: 'You', isUser: true },
        ],
        'Nandini': [
            { text: 'Can you Give Me Notes?', user: 'Prince', isUser: false },
            { text: 'Why Not!', user: 'You', isUser: true },
        ],
        'Harmish': [
            { text: 'Hii!', user: 'Nency', isUser: false },
            { text: 'Heyy!', user: 'You', isUser: true },
        ],
        'Nency': [
            { text: 'How was your work going ?', user: 'Shyam', isUser: false },
            { text: 'Its going good!', user: 'You', isUser: true },
            { text: 'what about yours?', user: 'You', isUser: true },
        ],
    };

   
    const handleSelectChat = (chat) => {
        setActiveChat(chat);
        setMessages(chatMessages[chat.name] || []);
    };

   
    const handleSendMessage = (text) => {
        const newMessage = { text, user: 'You', isUser: true };
        setMessages((prev) => [...prev, newMessage]);
    };

   
    const handleLogin = () => {
        setIsLoggedIn(true); 
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                  
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                   
                    <Route path="/" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : (
                        <>
                            <ChatList chats={chats} onSelectChat={handleSelectChat} />
                            {activeChat && (
                                <div className="chat-window">
                                    <ChatWindow messages={messages} activeChat={activeChat} />
                                    <MessageInput onSendMessage={handleSendMessage} />
                                </div>
                            )}
                        </>
                    )} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
