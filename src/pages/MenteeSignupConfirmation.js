import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Page from '../components/Page';

export default class MenteeSignupConfirmation extends Component {
    render() {
        return (
            <Page>
                <h1>Welcome to Advice for Good</h1>
                <p>Next steps:</p>
                <ol>
                    <li>Browse the mentor list.</li>
                    <li>Volunteer at one of the mentor’s preferred charities.</li>
                    <li>Return to the site and blog about your experience.</li>
                    <li>You’ll be awarded points for your efforts. (1 point per hour)</li>
                    <li>Use those points to meet with a mentor.</li>
                    <li>Repeat!</li>
                </ol>
                <p>So get started!</p>
                <Link to="/mentors"><button className="btn btn-primary">Browse Mentors</button></Link>
            </Page>
        );
    }
}
