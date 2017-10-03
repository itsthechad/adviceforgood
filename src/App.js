import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

// Components
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

import 'typeface-roboto';
import './App.css';

const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: false };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    render() {
        const { classes } = this.props;
        const { drawerOpen } = this.state;

        return (
            <div className="App">
                <div className={ classes.root }>
                    <div className={ classes.appFrame }>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        <Header handleDrawerToggle={ this.onDrawerToggle } />
                        <Nav
                            drawerOpen={ drawerOpen }
                            handleDrawerToggle={ this.onDrawerToggle } />
                        <Main />
                    </div>
                </div>
            </div>
        );
    }

    onDrawerToggle() {
        const { drawerOpen } = this.state;
        this.setState({ drawerOpen: !drawerOpen });
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
