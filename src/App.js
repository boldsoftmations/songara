import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routers/routers';


function App() {
  return (
    <Router>
    <div>
      <Routers />
    </div>
  </Router>
  );
}

export default App;
