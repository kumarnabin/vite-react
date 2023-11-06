import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../assets/Layout.css"

function Layout({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        handleResize();
    }, []);
    return (<div className={`body ${isSidebarOpen ? '' : 'sidebar-close'}`}>
        <Navbar handleToggleSidebar={handleToggleSidebar}/>
        <Sidebar/>
        <div className="main-content">
            {children}
        </div>
        <Footer/>
    </div>);
}

export default Layout;
