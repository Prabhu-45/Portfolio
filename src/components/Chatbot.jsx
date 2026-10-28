import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi! I'm Prabhu's AI assistant. Ask me anything about his projects, skills, or recent GitHub activity!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to UI immediately
    const newMessages = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Send to our secure Vercel API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages // pass previous context
        })
      });

      if (!response.ok) {
        throw new Error('API Error');
      }

      const data = await response.json();
      
      setMessages([...newMessages, { role: 'model', text: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'model', text: 'Sorry, I am having trouble connecting right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        className={`chatbot-fab ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <Bot size={20} className="chatbot-icon" />
            <div>
              <h3>Prabhu's AI Agent</h3>
              <span className="chatbot-status">Online</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="chatbot-close">
            <X size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble-wrapper ${msg.role}`}>
              <div className="chat-avatar">
                {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className="chat-bubble">
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-bubble-wrapper model">
              <div className="chat-avatar"><Bot size={16} /></div>
              <div className="chat-bubble loading">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="chatbot-input-area">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
