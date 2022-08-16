import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Operator from './Operator';
import Talent from './Talent';
import Skill from './Skill';
import Module from './Module';

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
