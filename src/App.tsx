import React,{useState,useEffect } from "react";
import Layout from "./components/Layout";
import Routes from "./Routes"; // Import the Routes component
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import ContextMenu from './components/ContextMenu';

function App() {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    const menuItems = [
      {
        label: 'Option 1',
        onClick: () => {
          // Handle the action for Option 1
          console.log(e)
          closeContextMenu();
        },
      },
      {
        label: 'Option 2',
        onClick: () => {
          // Handle the action for Option 2
          closeContextMenu();
        },
      },
      {
        label: 'Option 3',
        onClick: () => {
          // Handle the action for Option 3
          closeContextMenu();
        },
      },
    ];

    setContextMenu({ x, y, items: menuItems });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    // Add a click event listener to the document body
    document.body.addEventListener('click', closeContextMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', closeContextMenu);
    };
  }, []);
  return (
      <div onContextMenu={handleContextMenu}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={contextMenu.items}
          onClose={closeContextMenu}
        />
      )}
    </div>
  );
}

export default App;
