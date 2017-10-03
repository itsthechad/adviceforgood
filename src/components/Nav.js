import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import List, { ListItem } from 'material-ui/List';


const drawerWidth = 240;

const styles = theme => ({
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
});

class Nav extends React.Component {
    render() {
        const { classes, drawerOpen } = this.props;

        const drawerContents = (
            <div>
                <div className={ classes.drawerHeader } />
                <Divider />
                <List>
                    <ListItem>
                        <Link to={ '/' }>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={ '/mentors' }>Mentors</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={ '/events' }>Events</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <Link to={ '/' }>About</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={ '/' }>More Stuff</Link>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        type="temporary"
                        open={ drawerOpen }
                        classes={ { paper: classes.drawerPaper } }
                        onRequestClose={ this.handleDrawerToggle }
                        ModalProps={ { keepMounted: true } } >
                        { drawerContents }
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Drawer
                        type="permanent"
                        open
                        classes={ { paper: classes.drawerPaper } } >
                        { drawerContents }
                    </Drawer>
                </Hidden>
            </div>
        );
    }

    handleDrawerToggle = () => {
        this.props.handleDrawerToggle();
    };
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func,
    drawerOpen: PropTypes.bool,
};

export default withStyles(styles)(Nav);
