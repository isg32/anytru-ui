import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import usericon from '../assets/images/user-icon.png';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage (mock logout)
    localStorage.removeItem('user');
    navigate('/');
  };

  const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user data from localStorage

  return (
    <nav className="navbar">
  <h1>AnyTru</h1>
  {user ? (
    <div className="user-info">
      <img className='user-icon' src={usericon} alt="User" />
      <span className='username'>{user.email}</span>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  ) : null} {/* Removed Sign In button for logged-in users */}
</nav>
  );
}

export default Navbar;
