import React, { useState } from 'react';
import axios from 'axios';
import styles from './ChatBot.module.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm Manikanta's AI assistant. Ask me about his skills, experience, or projects!", 
      sender: "bot" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // API call with error handling
      const { data } = await axios.post('/api/chat', { 
        question: input 
      }, {
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Add bot response
      setMessages(prev => [...prev, { 
        text: data.reply || "Thanks for your question!", 
        sender: "bot" 
      }]);

    } catch (error) {
      console.error('API Error:', error);
      setMessages(prev => [...prev, { 
        text: error.response?.data?.error || 
             "Sorry, I'm having connection issues. Please try again.", 
        sender: "bot" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotWidget}>
      {isOpen ? (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatbotHeader}>
            <h3>Ask About Manikanta</h3>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className={styles.chatbotMessages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.typingIndicator}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.chatbotInput}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Manikanta..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
            >
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      ) : (
        <button 
          className={styles.chatbotToggle}
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          💬
        </button>
      )}
    </div>
  );
}