import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLineChart as faChart, faCog, faUser} from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { label: 'Dashboard', icon: faChart, to: '/dashboard' },
    { label: 'Profile', icon: faUser, to: '/profile' },
    { label: 'Settings', icon: faCog, to: '/settings' },
];


function Navbar() {

    return (
        <div className="sidebar">
            {menuItems.map((menuItem, index) => (
                <div className="menu-item" key={index}>
                    <NavLink to={menuItem.to} className="link">
                        <FontAwesomeIcon icon={menuItem.icon}/>
                        <span className="menu-text">{menuItem.label}</span>
                    </NavLink>
                </div>
            ))}
        </div>);
}

export default Navbar;
