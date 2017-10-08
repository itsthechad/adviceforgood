import React, { Component } from 'react';

// Components
import Page from '../components/Page';

export default class MenteeSignupConfirmation extends Component {
    render() {
        return (
            <Page>
                <h1>Welcome to Advice for Good</h1>
                <ol>
                    <li>Thank you for signing up to be an Advice for Good mentor.</li>
                    <li>Our administrators have been notified and will approve your profile once it has been reviewed.</li>
                    <li>Once you have been approved your mentor profile will be public and our mentees will be able to request your time.</li>
                </ol>
            </Page>
        );
    }
}
