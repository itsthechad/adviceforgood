import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Pages
import Page from '../components/Page';

// Services
import UserService from '../services/UserService';

// Constants
const USER = UserService.getCurrentUser();
// TODO: temp
const TIERPRICING = {
    1: 2, // (Tier 1 costs 2 points)
    2: 3,
};

export default class MentorContact extends Component {
    static defaultProps = {
        location: {}
    };

    static propTypes = {
        location: PropTypes.object,
    };

    render() {
        const { mentor, mentorshipTier } = this.props.location.state;

        if (USER.points < TIERPRICING[mentorshipTier]) {
            return (
                <h1>Not enough points</h1>
            );
        }

        return (
            <Page>
                <h1>Contact Mentor</h1>
                <p>Tier: { mentorshipTier }, Mentor: { mentor.firstName }</p>
            </Page>
        );
    }
}
