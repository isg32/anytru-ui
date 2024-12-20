import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#users">Users</a></li>
        <li><a href="#metrics">Metrics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
