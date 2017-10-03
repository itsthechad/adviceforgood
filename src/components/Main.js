import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

// Pages
import Home from '../pages/Home';
import Events from '../pages/Events';
import Mentors from '../pages/Mentors';
import Signup from '../pages/Signup';

const styles = theme => ({
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

class Main extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.content }>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/events" component={ Events } />
                    <Route exact path="/mentors" component={ Mentors } />
                    <Route exact path="/signup" component={ Signup } />
                </Switch>
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
