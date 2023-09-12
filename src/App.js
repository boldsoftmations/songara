import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routers/routers';
import Sidebar from './layout/Sidebar/Sidebar';
import "./App.css";
import Header from './layout/Header/Header';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);
  }, []);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={theme}>
      <Router>
        <div className="appContainer">
          {accessToken && <Header accessToken={accessToken} OpenSidebar={OpenSidebar} /> }
          <div className="contentContainer">
            {accessToken && <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} theme={theme} toggleTheme={toggleTheme} />}
            <main>
              <Routers />
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
