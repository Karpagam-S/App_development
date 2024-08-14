import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import AdminProperties from './components/AdminProperties';
import AdminUsers from './components/AdminUsers';
import AdminRequests from './components/AdminRequests';
import AdminFinancials from './components/AdminFinancials';
import UserLogin from './components/UserLogin';
import LandingPage from './components/LandingPage';
import PayRent from './components/PayRent';
import PropertyListings from './components/PropertyListings';
import ContactUs from './components/ContactUs';
import Features from './components/Features';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import TenantForm from './components/TenantForm';
import LeaseAgreement from './components/LeaseAgreement';
import Payment from './components/Payment';
import MaintenanceRequest from './components/MaintenanceRequest';
import TenantDashboard from './components/TenantDashboard';
import TenantsHome from './components/TenantsHome';  
import OwnersHome from './components/OwnersHome'; 
import UserRegister from './components/UserRegister';
import Services from './components/Services';
import CommunicationPage from './components/CommunicationPage';
import CombinedComponent from './components/CombinedComponent';
import './App.css';

function App() {
    // Placeholder for authentication logic
    const isAuthenticated = true; // Replace with actual authentication check

    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/rent" element={<PayRent />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/user-register" element={<UserRegister />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/admin/home" element={<AdminHome />} />
                    <Route path="/admin/properties" element={<AdminProperties />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/requests" element={<AdminRequests />} />
                    <Route path="/admin/financials" element={<AdminFinancials />} />
                    <Route path="/user/login" element={<UserLogin />} />
                    <Route path="/list" element={<PropertyListings />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/onboard" element={<TenantForm />} />
                    <Route path="/upload-lease" element={<LeaseAgreement />} />
                    <Route path="/pay-rent" element={<Payment />} />
                    <Route path="/submit-maintenance" element={<MaintenanceRequest />} />
                    <Route path="/dashboard" element={<TenantDashboard />} />
                    <Route path="/tenants" element={isAuthenticated ? <TenantsHome /> : <Navigate to="/login" />} />
                    <Route path="/owners" element={<OwnersHome />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/communication" element={<CommunicationPage />} />
                    <Route path="/admin" element={<CombinedComponent />} />
                </Routes>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
