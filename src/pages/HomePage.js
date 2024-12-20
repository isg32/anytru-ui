import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default HomePage;
