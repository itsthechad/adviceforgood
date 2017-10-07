import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav className="navbar">
                    <Link to="/" className="navbar-brand">Advice For Good</Link>
                    <ul className="nav navbar-nav">
                        <li class="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li class="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                        <li class="nav-item"><Link className="nav-link" to="/mentors">Mentors</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
