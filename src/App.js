import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Header from './components/Header';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import MenteeSignup from './pages/MenteeSignup';
import MentorApply from './pages/MentorApply';
import Mentor from './pages/Mentor';
import Login from './pages/Login';
import Logout from './pages/Logout';
import MenteeSignupConfirmation from './pages/MenteeSignupConfirmation';
import MentorApplyConfirmation from './pages/MentorApplyConfirmation';
import Users from './pages/admin/Users';
import EditUser from './pages/admin/EditUser';

// Services
import UserService from './services/UserService';

export default class App extends Component {
    render() {
        const isAdmin = UserService.isAdmin();

        return (
            <div className="App">
                <Header isAdmin={ isAdmin } />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/mentors" component={ Mentors } />
                    <Route exact path="/mentors/:mentorId" component={ Mentor } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/logout" component={ Logout } />
                    <Route exact path="/signup" component={ MenteeSignup } />
                    <Route exact path="/mentor-apply" component={ MentorApply } />
                    <Route exact path="/signup-confirmation" component={ MenteeSignupConfirmation } />
                    <Route exact path="/mentor-apply-confirmation" component={ MentorApplyConfirmation } />
                    { isAdmin && <Route exact path="/users" component={ Users } /> }
                    { isAdmin && <Route exact path="/users/:id" component={ EditUser } /> }
                </Switch>
            </div>
        );
    }
}
