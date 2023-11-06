import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navbar({handleToggleSidebar}) {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="brand">Your Brand</div>
                <div className="menu-toggle">
                    <button type="button" id="toggleSidebar" title="Menu" onClick={handleToggleSidebar}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
            <div className="navbar-right">
                <div className="user-profile">Admin
                    <a title="logout" href="#" id="logout">
                        <i className="fas fa-sign-out"></i>
                    </a>
                </div>
            </div>

        </nav>);
}

export default Navbar;
