import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Authentication and Landing
import UserLogin from '../userLogin';
import UserSignup from '../userSignup';
import AdminLogin from '../adminLogin';
import AdminSignup from '../adminSignup';
import LandingPage from '../landingpage';

// User Portal Components
import UserHome from '../Userportal/UserHome';
import PropertyListingsU from '../Userportal/PropertyListingU';
import TenantManagementU from '../Userportal/TenantManagementu';
import FinancialManagementU from '../Userportal/FinancialManagementU';
import MaintenanceAndRepairsU from '../Userportal/MaintenanceAndRepairsU';
import CommunicationAndNotificationsU from '../Userportal/CommunicationAndNotificationsU';
import DocumentManagementU from '../Userportal/DocumentManagementU';
import ReportingAndAnalyticsU from '../Userportal/ReportingAndAnalyticsU';

// Admin Portal Components
import AdminHome from '../Ownerportal/AdminHome';
import PropertyListingsA from '../Ownerportal/PropertyListingA';
import TenantManagementA from '../Ownerportal/TenantManagementA';
import FinancialManagementA from '../Ownerportal/FinancialManagementA';
import MaintenanceAndRepairsA from '../Ownerportal/MaintenanceAndRepairsA';
import CommunicationAndNotificationsA from '../Ownerportal/CommunicationAndNotificationsA';
import DocumentManagementA from '../Ownerportal/DocumentManagementA';
import ReportingAndAnalyticsA from '../Ownerportal/ReportingAndAnalyticsA';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/admin-home" element={<AdminHome />} />

        {/* User Portal Routes */}
        <Route path="/user/property-listings" element={<PropertyListingsU />} />
        <Route path="/user/tenant-management" element={<TenantManagementU />} />
        <Route path="/user/financial-management" element={<FinancialManagementU />} />
        <Route path="/user/maintenance-and-repairs" element={<MaintenanceAndRepairsU />} />
        <Route path="/user/communication-and-notifications" element={<CommunicationAndNotificationsU />} />
        <Route path="/user/document-management" element={<DocumentManagementU />} />
        <Route path="/user/reporting-and-analytics" element={<ReportingAndAnalyticsU />} />

        {/* Admin Portal Routes */}
        <Route path="/admin/property-listings" element={<PropertyListingsA />} />
        <Route path="/admin/tenant-management" element={<TenantManagementA />} />
        <Route path="/admin/financial-management" element={<FinancialManagementA />} />
        <Route path="/admin/maintenance-and-repairs" element={<MaintenanceAndRepairsA />} />
        <Route path="/admin/communication-and-notifications" element={<CommunicationAndNotificationsA />} />
        <Route path="/admin/document-management" element={<DocumentManagementA />} />
        <Route path="/admin/reporting-and-analytics" element={<ReportingAndAnalyticsA />} />
      </Routes>
    </Router>
  );
};

export default Routing;
