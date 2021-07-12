import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <Route path='/Dashboard' component={Dashboard}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </Router>
  );
};

export default App;
