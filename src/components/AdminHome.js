import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { FaHome, FaUsers, FaBox, FaList, FaDollarSign, FaSignOutAlt } from 'react-icons/fa';
import './AdminHome.css';  // Ensure you have this CSS file

const AdminHome = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
            </header>
            <nav className="admin-nav">
                <ul>
                    <li>
                        <Link to="/admin/home" className="nav-link">
                            <FaHome className="nav-icon" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/properties" className="nav-link">
                            <FaBox className="nav-icon" />
                            <span className="nav-text">Manage Properties</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="nav-link">
                            <FaUsers className="nav-icon" />
                            <span className="nav-text">Manage Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/requests" className="nav-link">
                            <FaList className="nav-icon" />
                            <span className="nav-text">Maintenance Requests</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/financials" className="nav-link">
                            <FaDollarSign className="nav-icon" />
                            <span className="nav-text">Financial Reports</span>
                        </Link>
                    </li>
                    <li>
                        <button className="logout-button" onClick={logoutHandler}>
                            <FaSignOutAlt className="logout-icon" />
                            <span className="logout-text">Logout</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminHome;
