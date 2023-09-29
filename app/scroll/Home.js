"use client";
import React, { useState } from "react";
import Layout from "./Layout";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

const handleSend = () => {
  if (input.trim() !== '') {
    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate a bot response with a delay
    setTimeout(() => {
      const botMessage = { text: 'This is a bot response.', isUser: false };
      setMessages([...messages, botMessage]);
    }, 1000); // Adjust the delay as needed
  }
};


  return (
    <Layout
      messages={messages}
      input={input}
      onMessageSend={handleSend}
      onInputChange={handleInputChange}
    />
  );
};

export default Home;
