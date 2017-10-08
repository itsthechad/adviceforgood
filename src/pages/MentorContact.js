import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw } from 'draft-js';
import { Redirect } from 'react-router';

// Components
import Page from '../components/Page';
import MentorContactForm from '../components/forms/MentorContactForm';

// Services
import MenteeService from '../services/MenteeService';
import UserService from '../services/UserService';

// Constants
// TODO: temp
const TIERPRICING = {
    TIER_ONE: 2, // (Tier 1 costs 2 points)
    TIER_TWO: 3,
};

export default class MentorContact extends Component {
    static defaultProps = {
        location: {}
    };

    static propTypes = {
        location: PropTypes.object,
    };

    constructor() {
        super();

        this.state = {
            wasValidated: false,
            msgBodyEditorState: EditorState.createEmpty(),
            formSubmittedSuccessfully: false,
        };
    }

    render() {
        const { mentorshipTier } = this.props.location.state;
        const { wasValidated, msgBodyEditorState, formSubmittedSuccessfully } = this.state;

        const formData = {
            wasValidated,
            msgBodyEditorState
        };

        const currentUser = UserService.getCurrentUser();

        if (formSubmittedSuccessfully) {
            return <Redirect to="/contact-mentor-confirmation" />;
        } else if (!currentUser) {
            return (
                <Page>
                    <h1>Not logged in</h1>
                </Page>
            );
        } else if (currentUser.points < TIERPRICING[mentorshipTier]) {
            return (
                <Page>
                    <h1>Not enough points</h1>
                </Page>
            );
        } // else

        return (
            <Page>
                <h1>Contact Mentor</h1>
                <MentorContactForm
                    formData={ formData }
                    handleInputChange={ this.onInputChange }
                    handleMsgBodyChange={ this.onMsgBodyChange }
                    handleSubmit={ this.onSubmit } />
            </Page>
        );
    }

    onInputChange = (e) => {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    }

    onMsgBodyChange = (editorState) => {
        this.setState({ msgBodyEditorState: editorState });
    }

    onSubmit = (e, formIsValid) => {
        e.preventDefault();
        e.stopPropagation();

        if (formIsValid) {
            this.submitForm();
        } else {
            this.setState({ wasValidated: true });
        }
    }

    submitForm = () => {
        const { mentor, mentorshipTier } = this.props.location.state;
        const { msgBodyEditorState } = this.state;

        const currentUser = UserService.getCurrentUser();

        MenteeService.firstContact({
            menteeId: currentUser.id,
            mentorId: mentor.id,
            mentorshipTier,
            message: JSON.stringify(convertToRaw(msgBodyEditorState.getCurrentContent())),
        })
        .then(() => {
            this.setState({ formSubmittedSuccessfully: true });
        })
        .catch(() => {
            console.log('failed');
            // Show error
        });
    }
}
