import React, { Component, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp';

class NavBar extends Component {
    render() {
        return (
            <nav className="navBar_body">
                <div className="navBar__container">
                    <li className="navBar__container--brand">
                        <Link key={'/'} to={'/'} activeClassName="active" exact>
                            <span>L</span>
                            <span>e</span>
                            <span>w</span>
                            <span>e</span>
                            <span>y</span>
                            <span>s</span>
                            <span>e</span>
                        </Link>
                    </li>
                    <li className="navBar__container--about">
                        <Link key={'/about'} to={'/about'} activeClassName="active" exact>
                            <span>a</span>
                            <span>b</span>
                            <span>o</span>
                            <span>u</span>
                            <span>t</span>
                        </Link>
                    </li>
                    <ul className="navBar__container--menu">
                        <GuestNavBarOptions />
                        <UserNavBarOptions />
                    </ul>
                </div>
            </nav>
        )
    }
}

function UserNavBarOptions() {
    return (
        <div>
            <li className="navBar--menu__item">
                <Link to={'/werkwoords/infinitiefs'}>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                    <span>s</span>
                </Link>
            </li>
            <li className="navBar--menu__item">
                <Link to={'/thanks'}>
                    <span className="navBar--body__item--separator"></span>
                </Link>
            </li>
            <li className="navBarmenu__item">
                <Link to={'/notes/add'}>
                    <span>A</span>
                    <span>d</span>
                    <span>d</span>
                </Link>
            </li>
            <li className="navBar--menu__item">
                <Link to={'/werkwoords/'}>
                    <span>M</span>
                    <span>e</span>
                    <span>m</span>
                    <span>o</span>
                    <span>r</span>
                    <span>y</span>
                </Link>
            </li>
            <li className="navBar--menu__item navBar--menu__item--logout">
                <Link to={'/logout'}>
                    <span>※</span>
                </Link>
            </li>
        </div>
    );
}

function GuestNavBarOptions() {
    const [showSignUp, setShowSignUp] = useState(true);
    const [showNextSignUp, setShowNextSignUp] = useState(false);

    const [showSignIn, setShowSignIn] = useState(true);
    const [showNextSignIn, setShowNextSignIn] = useState(false);

    return (
        <div>
            {showSignIn && (
                <li className="navBar--menu__item" onClick={() => setShowNextSignIn(true)}>
                    <a>
                        <span>S</span>
                        <span>i</span>
                        <span>g</span>
                        <span>n</span>
                        <span></span>
                        <span>I</span>
                        <span>n</span>
                    </a>
                </li>
            )}
            <CSSTransition
              in={showNextSignIn}
              timeout={300}
              classNames="signIn__body"
              unmountOnExit
              onEnter={() => setShowSignIn(false)}
              onExited={() => setShowSignIn(true)}
            >
                <div
                    className='signIn__body'
                    dismissible
                    onClose={() => setShowNextSignIn(false)}
                >
                    <SignIn />
                    <input
                        className='signIn_input--submitBtn'
                        onClick={() => setShowNextSignIn(false)}
                    />
                </div>
            </CSSTransition>
            <li className="navBar--menu__item">
                <Link to={'/thanks'}>
                    <span className="navBar--body__item--separator"></span>
                </Link>
            </li>
            {showSignUp && (
                <li className="navBar--menu__item" onClick={() => setShowNextSignUp(true)}>
                    <a>
                        <span>S</span>
                        <span>i</span>
                        <span>g</span>
                        <span>n</span>
                        <span></span>
                        <span>U</span>
                        <span>p</span>
                    </a>
                </li>
            )}
            <CSSTransition
              in={showNextSignUp}
              timeout={300}
              classNames="signUp__body"
              unmountOnExit
              onEnter={() => setShowSignUp(false)}
              onExited={() => setShowSignUp(true)}
            >
                <div
                    className='signUp__body'
                    dismissible
                    onClose={() => setShowNextSignUp(false)}
                >
                    <SignUp />
                    <input
                        className='signUp_input--submitBtn'
                        onClick={() => setShowNextSignUp(false)}
                    />
                </div>
            </CSSTransition>
        </div>
    );
}

export default NavBar;
