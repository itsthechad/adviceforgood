import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    flex: {
        flex: 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class Header extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar className={ classes.appBar }>
                    <Toolbar>
                        <IconButton
                            color="contrast"
                            aria-label="open drawer"
                            onClick={ this.handleDrawerToggle }
                            className={ classes.navIconHide } >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            type="title"
                            color="inherit"
                            noWrap
                            className={ classes.flex } >
                            Advice For Good
                        </Typography>
                        <Button
                            className={ classes.signupBtn }
                            color="contrast" >
                            <Link to={ '/signup' }>
                                Signup
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    handleDrawerToggle = () => {
        this.props.handleDrawerToggle();
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func,
};

export default withStyles(styles)(Header);
