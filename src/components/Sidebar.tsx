import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faLineChart as faChart, faUser} from '@fortawesome/free-solid-svg-icons';
import {BiSolidChevronsDown} from "react-icons/bi";

const MenuItem = ({label, icon, to, type}) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    useEffect(() => {

    }, []);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div>
            {type == 'divider' ? (
                <div className="menu-item-divider">
                    <FontAwesomeIcon icon={icon}/>
                    <span className="menu-text">{label}</span>
                    <span style={{float:"right"}}> <BiSolidChevronsDown/> </span>
                </div>
            ) : (< >
                    <NavLink to={to} className="menu-item link" activeClassName="active">
                        <FontAwesomeIcon icon={icon}/>
                        <span className="menu-text">{label}</span>
                    </NavLink>
                </>
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
        type: 'divider'
    },
    {label: 'General', icon: faUser, to: '/settings/general'},
    {label: 'Security', icon: faUser, to: '/settings/security'},
];

function Sidebar() {
    return (
        <div className="sidebar">
            {menuItems.map((menuItem, index) => (
                <MenuItem
                    key={index}
                    label={menuItem.label}
                    icon={menuItem.icon}
                    to={menuItem?.to}
                    type={menuItem?.type}
                />
            ))}
        </div>
    );
}

export default Sidebar;
