import React, { Component } from 'react';
import './App.css';
import Logintbygoogle from './Logintbygoogle'
import Dashboard from "./Dashboard";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Logintbygoogle} ></Route>
                            <Route path='/Dashboard' component={Dashboard} ></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
