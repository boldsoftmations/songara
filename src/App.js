import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routers/routers';
import Header from './layout/Header/Header';

function App() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div >
  
      {accessToken && <Header />}
      <div className="appcontainer">
      <Router>
        <Routers />
      </Router>
    </div>
  </div>
  );
}

export default App;
