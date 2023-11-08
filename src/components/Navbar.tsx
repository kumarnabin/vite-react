import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import UserDropdown from "./UserDropdown"

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
              <UserDropdown/>
            </div>
        </nav>);
}

export default Navbar;
