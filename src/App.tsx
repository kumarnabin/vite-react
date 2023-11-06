import React from "react";
import Layout from "./components/Layout";
import Routes from "./Routes"; // Import the Routes component
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
