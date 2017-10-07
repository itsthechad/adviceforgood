import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Mentors from './pages/Mentors';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/events" component={ Events } />
                    <Route path="/mentors" component={ Mentors } />
                </Switch>
            </div>
        );
    }
}
