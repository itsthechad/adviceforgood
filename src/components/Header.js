import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';


export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <h1 className="App-title">Advice For Good</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/mentors">Mentors</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
