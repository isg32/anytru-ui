import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Key Metrics</h2>
      <div className="metrics-grid">
        <div className="metric">
          <div className="metric-header">Total Users</div>
          <div className="metric-value">100</div>
          <div className="metric-change">
            <span className="change-up">+5</span> {/* Display change in stats */}
          </div>
        </div>
        <div className="metric">
          <div className="metric-header">Active Users</div>
          <div className="metric-value">80</div>
          <div className="metric-change">
            <span className="change-down">-2</span> {/* Display change in stats */}
          </div>
        </div>
        <div className="metric">
          <div className="metric-header">New Signups</div>
          <div className="metric-value">5</div>
          <div className="metric-change">
            <span className="change-up">+3</span> {/* Display change in stats */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
