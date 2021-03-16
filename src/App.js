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

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
// import Login from './components/SignIn';
import Logout from './components/Logout';

import './css/App.css';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/signup' component={SignUp}/>
                    
                    <Route path="/logout" component={Logout} />
                </Switch>
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
