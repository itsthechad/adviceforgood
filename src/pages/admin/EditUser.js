import React, { Component } from 'react';
import { Redirect } from 'react-router';

// Components
import Page from '../../components/Page';
import MenteeForm from '../../components/forms/MenteeForm';

// Services
import MenteeService from '../../services/MenteeService';
import UserService from '../../services/UserService';

/*
 * Create or edit a user as an admin
 */
export default class EditUser extends Component {

    state = {};

    componentWillMount() {
        const userId = this.props.match.params.id;
        UserService.getUserById(userId)
        .then((resp) => {
            this.setState({ user: resp });
        });
    }

    render() {
        const { wasValidated, user = {}, formSubmittedSuccessfully } = this.state;
        const { firstName, lastName, email, password, points } = user;

        const formData = {
            wasValidated,
            firstName,
            lastName,
            email,
            password,
            points,
        };

        if (formSubmittedSuccessfully) {
            return <Redirect to="/users" />;
        }

        return (
            <Page>
                <h1>Edit User</h1>
                <MenteeForm
                    formData={ formData }
                    handleInputChange={ this.onInputChange }
                    handleSubmit={ this.onSubmit }
                    isAdmin />
            </Page>
        );
    }

    onInputChange = (e) => {
        const { target } = e;
        const value = target.value;
        const { name } = target;
        const { user } = this.state;
        user[name] = value;

        this.setState({ user });
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

    submitForm() {
        const { user } = this.state;
        const { firstName, lastName, email, password, points, id } = user;

        MenteeService.users({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password,
            points: points,
        }, id)
        .then(() => {
            this.setState({ formSubmittedSuccessfully: true });
        })
        .catch(() => {
            console.log('failed');
            // Show error
        });
    }
}
