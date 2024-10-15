
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="message-input">
        
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="input-field"
            />
            <button onClick={handleSend} className="send-button">Send</button>
        </div>
    );
};

export default MessageInput;
