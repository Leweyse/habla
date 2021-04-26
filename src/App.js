import React, { Component, useContext, useState, createContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Logout from './components/Logout';

import './css/App.css';

// <Route path='/signup' component={SignUp}/>

class App extends Component {
    render() {
        const App = () => (
            <div>
                <NavBar />
                <div className="page">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </div>
        )
        return (
            <BrowserRouter>
                <Switch>
                    <App/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
