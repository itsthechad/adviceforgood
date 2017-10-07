import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Advice For Good</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <NavLink exact to="/" className="nav-item nav-link" activeClassName='active'>Home</NavLink>
                            <NavLink to="/mentors" className="nav-item nav-link" activeClassName='active'>Mentors</NavLink>
                            <NavLink to="/events" className="nav-item nav-link" activeClassName='active'>Events</NavLink>
                            <NavLink to="/signup" className="nav-item nav-link" activeClassName='active'>Signup</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
