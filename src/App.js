import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routers/routers';
import Header from './layout/Header/Header';
import Navbar from './layout/Sidebar/Sidebar';



function App() {
  const token = localStorage.getItem("token");


  return (
    <Router>
    <div>
      {token && <Header />} {/* Show Header if token exists */}
      {token && <Navbar />} {/* Show Sidebar if token exists */}
      <Routers />
    </div>
  </Router>
  );
}

export default App;
