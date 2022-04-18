import React from 'react';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  LoginRegister,
  Internet,
  Cell,
  Play,
  Tv,
  Plans
} from './public-app/Pages';

function ReactRoutes(props: any) {
  return (
    <Router>
      <App>
        <Routes>
          <Route path='/' element={<Home />} {...props} />
          <Route path='login-register' element={<LoginRegister />} {...props} />
          <Route path='internet' element={<Internet />} {...props} />
          <Route path='cell' element={<Cell />} {...props} />
          <Route path='play' element={<Play />} {...props} />
          <Route path='tv' element={<Tv />} {...props} />
          <Route path='plans/*' element={<Plans />}>
            <Route path=':plan-type' element={<Plans />} {...props} />
          </Route>
        </Routes>
      </App>
    </Router>
  );
}

export default ReactRoutes;