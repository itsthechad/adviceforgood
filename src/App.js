import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Mentors from './pages/Mentors';

import 'typeface-roboto';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <Header>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/events" component={ Events } />
                        <Route exact path="/mentors" component={ Mentors } />
                    </Switch>
                </Header>
            </div>
        );
    }
}
