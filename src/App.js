import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Mentors from './pages/Mentors';
import MenteeSignup from './pages/MenteeSignup';
import MentorApply from './pages/MentorApply';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/events" component={ Events } />
                    <Route exact path="/mentors" component={ Mentors } />
                    <Route exact path="/signup" component={ MenteeSignup } />
                    <Route exact path="/mentor-apply" component={ MentorApply } />
                </Switch>
            </div>
        );
    }
}
