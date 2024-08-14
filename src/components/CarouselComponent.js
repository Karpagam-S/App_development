// src/components/CommunicationPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './CommunicationPage.css';

const socket = io('http://localhost:3001'); // Replace with your server URL

const CommunicationPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
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

  const handleSendMessage = async () => {
    const newMsg = {
      id: messages.length + 1,
      sender: 'User',
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
    };
    try {
      await axios.post('http://localhost:3001/messages', newMsg);
      setMessages([...messages, newMsg]);
      setNewMessage('');
      socket.emit('newMessage', newMsg); // Emit to server
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/messages/${id}`);
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
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

  const handleSendReply = async () => {
    const reply = {
      id: messages.length + 1,
      sender: 'User',
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
      replyTo,
    };
    try {
      await axios.post('http://localhost:3001/messages', reply);
      setMessages([...messages, reply]);
      setNewMessage('');
      setReplyTo(null);
      socket.emit('newMessage', reply); // Emit to server
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      const message = messages.find((msg) => msg.id === id);
      const updatedMessage = { ...message, read: true };
      await axios.put(`http://localhost:3001/messages/${id}`, updatedMessage);
      setMessages(messages.map((msg) =>
        msg.id === id ? updatedMessage : msg
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
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
