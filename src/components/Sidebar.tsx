import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faLineChart as faChart, faUser} from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({label, icon, to, subMenu}) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div>
            {subMenu ? (
                <div className="menu-item">
                    <div className="link" onClick={toggleSubMenu}>
                        <FontAwesomeIcon icon={icon}/>
                        <span className="menu-text">{label}</span>
                    </div>
                    <div className={`sub-menu ${isSubMenuOpen ? '' : 'close'}`}>
                        <div>
                            {subMenu.map((subItem, subIndex) => (
                                <div>
                                    <NavLink to={subItem.to} key={subIndex} className="link">
                                        <span className="menu-text">{subItem.label}</span>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (<div className="menu-item">
                    <NavLink to={to} className="link">
                        <FontAwesomeIcon icon={icon}/>
                        <span className="menu-text">{label}</span>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

const menuItems = [
    {label: 'Dashboard', icon: faChart, to: '/dashboard'},
    {label: 'Profile', icon: faUser, to: '/profile'},
    {
        label: 'Settings',
        icon: faCog,
        subMenu: [
            {label: 'General', to: '/settings/general'},
            {label: 'Security', to: '/settings/security'},
        ],
    },
];

function Sidebar() {
    return (
        <div className="sidebar">
            {menuItems.map((menuItem, index) => (
                <MenuItem
                    key={index}
                    label={menuItem.label}
                    icon={menuItem.icon}
                    to={menuItem.to}
                    subMenu={menuItem?.subMenu}
                />
            ))}
        </div>
    );
}

export default Sidebar;
