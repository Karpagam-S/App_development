import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       
           
            <div>
                <Link to="/login">
                    <button>User Login</button>
                </Link>
                <Link to="/admin/login">
                    <button>Admin Login</button>
                </Link>
            </div>
       
    );
};

export default Home;
