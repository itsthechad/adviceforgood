import React, { Component } from 'react';
import { Redirect } from 'react-router';

// Components
import Page from '../components/Page';
import MenteeSignupForm from '../components/forms/MenteeSignupForm';

// Services
import MenteeService from '../services/MenteeService';
import UserService from '../services/UserService';

// *
// * Create or edit a mentee account
// * TODO: Improve password functionality (both create and edit)
// *
export default class MenteeSignup extends Component {

    constructor() {
        super();

        const user = UserService.getUser() || {};
        const { firstName, lastName, email, id } = user;

        this.state = {
            wasValidated: false,
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            password: '',
            formSubmittedSuccessfully: false,
            existingUserId: id || '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const { wasValidated, firstName, lastName, email, password, formSubmittedSuccessfully } = this.state;

        const formData = {
            wasValidated,
            firstName,
            lastName,
            email,
            password,
        };

        if (formSubmittedSuccessfully) {
            return <Redirect to="/signup-confirmation" />;
        }

        return (
            <Page>
                <h1>Sign Up. Do Good.</h1>
                <MenteeSignupForm
                    formData={ formData }
                    handleInputChange={ this.onInputChange }
                    handleSubmit={ this.onSubmit } />
            </Page>
        );
    }

    onInputChange(e) {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    }

    onSubmit(e, formIsValid) {
        e.preventDefault();
        e.stopPropagation();

        if (formIsValid) {
            this.submitForm();
        } else {
            this.setState({ wasValidated: true });
        }
    }

    submitForm() {
        const { firstName, lastName, email, password, existingUserId } = this.state;

        MenteeService.users({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }, existingUserId)
        .then(() => {
            this.setState({ formSubmittedSuccessfully: true });
        })
        .catch(() => {
            console.log('failed');
            // Show error
        });
    }
}
