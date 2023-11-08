import React, { useState } from 'react';
import '../assets/ContextMenu.css'; // Create a CSS file for styling

const ContextMenu = ({ x, y, onClose, items }) => {
  return (
    <div
      className="context-menu"
      style={{ top: y, left: x }}
    >
      {items.map((item, index) => (
        <div key={index} className="context-menu-item" onClick={item.onClick}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
