import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Operator from './pages/Operator';
import Talent from './pages/Talent';
import Skill from './pages/Skill';
import Module from './pages/Module';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={ <Home /> }>
          <Route path='operator/:operator/' element={ <Operator /> }>
            <Route path='talent/' element={ <Talent /> } />
            <Route path='skill/' element={ <Skill /> } />
            <Route path='module/' element={ <Module /> } />
          </Route>
        </Route>
    </Routes>
  </Router>
)

export default App;
