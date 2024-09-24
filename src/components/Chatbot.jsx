import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", type: "received" },
        { text: "Hi! I need some information.", type: "sent" }
    ]);
    const [inputText, setInputText] = useState("");

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { text: inputText, type: "sent" }]);
            setInputText("");
        }
    };

    return (
        <div className="flex flex-col h-screen w-full">
            {/* Chat background */}
            <div className="flex-1 overflow-y-scroll  p-4">
                <div className="flex flex-col space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`max-w-xs p-2 rounded-lg ${message.type === 'sent' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Input box */}
            <div className="bg-gray-200 bg-opacity-50 backdrop-blur p-4 flex items-center">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg p-2 mr-4"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                    }}
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
