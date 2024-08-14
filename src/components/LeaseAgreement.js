import React, { useState } from 'react';
import './LeaseAgreement.css';
const LeaseAgreement = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Upload file to API
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/leases/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Lease agreement uploaded:', data);
    } catch (error) {
      console.error('Error uploading lease agreement:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Upload Lease Agreement</button>
    </form>
  );
};

export default LeaseAgreement;
