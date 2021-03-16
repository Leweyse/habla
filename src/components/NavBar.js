import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Logout from './Logout'

class NavBar extends Component {
    render() {
        return (
            // <ul>
            //     <li>
            //         <Link to="/public">Public Page</Link>
            //     </li>
            //     <li>
            //         <Link to="/protected">Protected Page</Link>
            //     </li>
            // </ul>
            <div>
                <nav className="navBar_body">
                    <div className="navBar__container">
                        <li className="navBar__container--brand">
                            <Link to={'/'}>
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
                            <Link to={'/about'}>
                                <span>a</span>
                                <span>b</span>
                                <span>o</span>
                                <span>u</span>
                                <span>t</span>
                            </Link>
                        </li>
                        <ul className="navBar__container--menu">
                            <UserNavBarOptions />
                            <GuestNavBarOptions />
                        </ul>
                    </div>
                </nav>
            </div>
        );
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
                    <LogoutButton />
                </Link>
            </li>
        </div>
    );
}

function GuestNavBarOptions() {
    return (
        <div>
            <li className="navBar--menu__item">
                <Link to={'/signin'}>
                    <LoginButton />
                </Link>
            </li>
            <li className="navBar--menu__item">
                <Link to={'/thanks'}>
                    <span className="navBar--body__item--separator"></span>
                </Link>
            </li>
            <li className="navBar--menu__item">
                <Link to={'/signup'}>
                    <span>S</span>
                    <span>i</span>
                    <span>g</span>
                    <span>n</span>
                    <span></span>
                    <span>U</span>
                    <span>p</span>
                </Link>
            </li>
        </div>
    );
}

function LoginButton() {
    return (
        <div>
            <span>S</span>
            <span>i</span>
            <span>g</span>
            <span>n</span>
            <span></span>
            <span>I</span>
            <span>n</span>
        </div>
    );
}

function LogoutButton() {
    return (
        <div>
            <span>※</span>
        </div>
    );
}

export default NavBar;
