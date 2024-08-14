import React, { useState } from 'react';
import './MaintenanceRequest.css';
const MaintenanceRequest = () => {
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setAttachments([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit maintenance request to API
    try {
      const formData = new FormData();
      formData.append('description', description);
      attachments.forEach((file, index) => {
        formData.append(`attachment${index}`, file);
      });
      const response = await fetch('/api/maintenance-requests', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Maintenance request submitted:', data);
    } catch (error) {
      console.error('Error submitting maintenance request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={description} onChange={handleDescriptionChange} placeholder="Describe the issue" required />
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default MaintenanceRequest;
