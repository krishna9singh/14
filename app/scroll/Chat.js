import React, { useState, useEffect, useRef } from 'react';

const Chat = ({ messages }) => {
  const chatContainerRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="h-64 overflow-y-auto border p-4" ref={chatContainerRef}>
      {messages.map((message, index) => (
        <div key={index} className={`mb-2 ${message.isUser ? 'text-blue-600' : 'text-green-600'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default Chat;
