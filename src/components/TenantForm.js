import React, { useState } from 'react';
import './TenantForm.css';

const TenantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    if (Object.values(formData).some(value => value === '')) {
      alert('All fields are required');
      return;
    }
    // Submit form data to API
    try {
      const response = await fetch('http://localhost:3001/tenants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Tenant onboarded:', data);
      // Redirect or show success message
    } catch (error) {
      console.error('Error onboarding tenant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TenantForm;
