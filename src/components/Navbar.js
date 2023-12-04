// Navbar.js
import React from 'react';

const Navbar = ({ user, onLogout }) => {
  return (
    <div
      style={{
        background: '#333',
        color: '#fff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ margin: 0 }}>Hi, {user ? user.name : 'Guest'}</p>
      <button
        onClick={onLogout}
        style={{
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          color: '#fff',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
