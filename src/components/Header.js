import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Components
import AFGBrand from '../components/AFGBrand';

// Styles
import '../styles/header.css';

// Services
import UserService from '../services/UserService';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="afg-navbar navbar navbar-expand-sm navbar-light">
                    <Link to="/" className="navbar-brand">
                        <AFGBrand />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav mr-auto">
                            <NavLink exact to="/" className="nav-item nav-link" activeClassName='active'>
                                <span className="nav-link-inner">How It Works</span>
                            </NavLink>
                            <NavLink to="/mentors" className="nav-item nav-link" activeClassName='active'>
                                <span className="nav-link-inner">Mentors</span>
                            </NavLink>
                        </div>

                        { this.renderAccountActions() }
                    </div>
                </nav>
            </header>
        );
    }

    renderAccountActions() {
        const user = UserService.getUser();

        if (!user) {
            // Not logged in, so show logged out options
            return (
                <div>
                    <Link to="/login" className="my-2 mx-2 my-lg-0">Log In</Link>
                    <Link to="/signup" className="my-2 my-lg-0">
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">
                            Get Mentorship
                        </button>
                    </Link>
                </div>
            );
        } // else

        let editAccountRoute;
        switch (user.role) {
            case 'MENTOR':
                editAccountRoute = '/mentor-apply';
                break;
            case 'MENTEE':
            default:
                editAccountRoute = '/signup';
                break;
        }

        return (
            <div>
                <Link to="/logout" className="my-2 mx-2 my-lg-0">Log Out</Link>
                { user.role !== 'ADMIN' &&
                    <Link to={ editAccountRoute } className="my-2 mx-2 my-lg-0">
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">
                            Edit Account
                        </button>
                    </Link>
                }
            </div>
        );
    }
}
