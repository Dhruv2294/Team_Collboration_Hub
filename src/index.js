// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { ChatProvider } from './components/ChatContext';
import './App.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <ChatProvider>
            <App />
        </ChatProvider>
    </React.StrictMode>
);
