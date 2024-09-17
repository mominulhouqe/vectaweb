"use client";
import { useState, useEffect } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Hello! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Simulate a typing indicator for the agent
  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTyping]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add the user's message to the chat
      setMessages([...messages, { sender: "user", text: inputValue }]);
      setInputValue("");
      setIsTyping(true);

      // Simulate agent's response after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "agent", text: "Thank you for your message! We'll get back to you shortly. You can email aslo vectawebbd@gmail.com" },
        ]);
      }, 1500);
    }
  };

  return (
    <div className={`fixed z-50 bottom-4 right-4 mb-2 ${isOpen ? "w-80" : "w-12"} transition-all duration-300`}>
      <button
        className="w-full h-12 bg-teal-500 text-white rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Chat" : "Chat"}
      </button>
      {isOpen && (
        <div className="bg-white h-96 shadow-lg rounded-lg mt-2 p-4 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Chat with us</h3>
          <div className="overflow-y-auto flex-1 mb-4 p-2 border border-gray-200 rounded">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    message.sender === "user" ? "bg-teal-100 text-teal-700" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            {isTyping && <p className="text-sm text-gray-500">Agent is typing...</p>}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
