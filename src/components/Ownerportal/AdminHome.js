import React from 'react';
import { Link } from 'react-router-dom';
// import './AdminHome.css';

const AdminHome = () => {
  return (
    <div className="admin-home">
      <h2>Admin Home</h2>
      <nav>
        <ul>
          <li><Link to="/admin/property-listings">Property Listings</Link></li>
          <li><Link to="/admin/tenant-management">Tenant Management</Link></li>
          <li><Link to="/admin/financial-management">Financial Management</Link></li>
          <li><Link to="/admin/maintenance-and-repairs">Maintenance and Repairs</Link></li>
          <li><Link to="/admin/communication-and-notifications">Communication and Notifications</Link></li>
          <li><Link to="/admin/document-management">Document Management</Link></li>
          <li><Link to="/admin/reporting-and-analytics">Reporting and Analytics</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHome;
