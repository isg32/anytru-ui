import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#users">User Management</a></li>
        <li><a href="#posts">Post Management</a></li>
        <li><a href="#orders">Orders Management</a></li>
        <li><a href="#news">News/Updates</a></li>
        <li><a href="#transactions">Transactions</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#help">Help</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
