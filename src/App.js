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
import { AuthProvider } from './contexts/auth-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
