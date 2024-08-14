// src/components/CommunicationPage.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './CommunicationPage.css';

// Replace with actual API call
const fetchMessages = async () => {
  return [
    { id: 1, sender: 'Admin', content: 'Lease renewal reminder.', timestamp: '2024-08-14T10:00:00Z', read: false },
    { id: 2, sender: 'User', content: 'Maintenance request.', timestamp: '2024-08-14T11:00:00Z', read: false },
  ];
};

const socket = io('http://localhost:4000'); // Replace with your server URL

const CommunicationPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    const loadMessages = async () => {
      const messages = await fetchMessages();
      setMessages(messages);
    };

    loadMessages();
  }, []);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleSendMessage = () => {
    const newMsg = {
      id: messages.length + 1,
      sender: 'User',
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
    socket.emit('newMessage', newMsg); // Emit to server
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleReply = (message) => {
    setReplyTo(message.id);
  };

  const handleSendReply = () => {
    const reply = {
      id: messages.length + 1,
      sender: 'User',
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
      replyTo,
    };
    setMessages([...messages, reply]);
    setNewMessage('');
    setReplyTo(null);
    socket.emit('newMessage', reply); // Emit to server
  };

  const handleMarkAsRead = (id) => {
    setMessages(messages.map((msg) =>
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const filteredMessages = messages.filter((msg) => {
    if (filter === 'all') return true;
    if (filter === 'read') return msg.read;
    if (filter === 'unread') return !msg.read;
    return true;
  }).filter((msg) =>
    msg.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="communication-container">
      <h1>Communication and Notifications</h1>
      <input
        type="text"
        placeholder="Search messages..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="filter-container">
        <select value={filter} onChange={handleFilterChange} className="filter-select">
          <option value="all">All Messages</option>
          <option value="read">Read Messages</option>
          <option value="unread">Unread Messages</option>
        </select>
      </div>
      <div className="message-list">
        {filteredMessages.map((msg) => (
          <div key={msg.id} className={`message-card ${msg.read ? 'read' : 'unread'}`}>
            <p><strong>{msg.sender}</strong>: {msg.content}</p>
            <p className="timestamp">{new Date(msg.timestamp).toLocaleString()}</p>
            <button onClick={() => handleMarkAsRead(msg.id)}>Mark as Read</button>
            <button onClick={() => handleDeleteMessage(msg.id)}>Delete</button>
            <button onClick={() => handleReply(msg)}>Reply</button>
          </div>
        ))}
      </div>
      {replyTo && (
        <div className="reply-section">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your reply here..."
          />
          <button onClick={handleSendReply}>Send Reply</button>
          <button onClick={() => setReplyTo(null)}>Cancel</button>
        </div>
      )}
      <div className="new-message">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default CommunicationPage;
