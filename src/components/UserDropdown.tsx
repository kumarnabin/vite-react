import React, { useState } from 'react';
import '../assets/UserDropdown.css'; // Make sure to create a CSS file for styling

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-dropdown-container">
      <button className="user-dropdown-button" onClick={toggleDropdown}>
        User
      </button>
      {isOpen && (
        <ul className="user-dropdown-menu">
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default UserDropdown;
