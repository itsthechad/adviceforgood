import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/Events';
import Mentors from './components/Mentors';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/events" component={ Events } />
                    <Route exact path="/mentors" component={ Mentors } />
                </Switch>
            </div>
        );
    }
}
