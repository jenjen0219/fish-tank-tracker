import React from 'react';
import Header from './Header';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TankCleaningLogPage from './TankCleaningLogPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact Component={Main} />
          <Route path="/tankCleaningLogPage" Component={TankCleaningLogPage} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
