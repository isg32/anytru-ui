import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Key Metrics</h2>
      <div className="metric">Total Users: 100</div>
      <div className="metric">Active Users: 80</div>
      <div className="metric">New Signups: 5</div>
    </div>
  );
}

export default Dashboard;
