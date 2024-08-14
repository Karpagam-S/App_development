import React from 'react';
import './TenantDashboard.css';

import { Link } from 'react-router-dom';

const TenantDashboard = () => {
  return (
    <div>
      <h1>Tenant Dashboard</h1>
      <Link to="/view-lease">View Lease Agreement</Link>
      <Link to="/pay-rent">Pay Rent</Link>
      <Link to="/submit-maintenance">Submit Maintenance Request</Link>
      <Link to="/onboard">tenant form</Link>
    </div>
  );
};

export default TenantDashboard;
