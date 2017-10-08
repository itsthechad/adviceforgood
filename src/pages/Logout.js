import React, { Component } from 'react';
import { Redirect } from 'react-router';

// Components
import Page from '../components/Page';

// Services
import UserService from '../services/UserService';

export default class Logout extends Component {

    state = {
        logoutSuccess: false,
    };

    render() {
        const { logoutSuccess } = this.state;

        if (logoutSuccess) {
            return <Redirect to="/" />;
        } // else

        return (
            <Page clsPrefix='logout'>
                <h1>Logging out...</h1>
            </Page>
        );
    }

    componentDidMount() {
        UserService.logout()
        .then(() => {
            this.setState({ logoutSuccess: '/' });
        });
    }
}
