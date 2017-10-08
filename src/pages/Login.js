import React, { Component } from 'react';
import classnames from 'classnames';
import { Redirect } from 'react-router';

// Components
import Page from '../components/Page';

// Services
import UserService from '../services/UserService';

export default class Login extends Component {

    state = {
        wasValidated: false,
        email: '',
        password: '',
        redirectTo: '',
    };

    render() {
        const { email, password, wasValidated, redirectTo } = this.state;

        // Redirect users once they've logged in:
        if (redirectTo) {
            return (
                <Redirect to={ redirectTo } />
            );
        } // else

        return (
            <Page clsPrefix="login">
                <h1>Log In</h1>

                {/* Form */}
                <form
                    className={ classnames('container', { 'was-validated': wasValidated }) }
                    id="needs-validation"
                    noValidate
                    ref={ (c) => { this.form = c; } }>

                    {/* Email */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom01">Email</label>
                            <input
                                name="email"
                                onChange={ this.handleInputChange }
                                value={ email }
                                type="email"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="me@example.com"
                                required />
                            <div className="invalid-feedback">
                                Please provide the email address associated with your Advice for Good account.
                            </div>
                        </div>
                    </div>

                    {/* Password  */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom02">Password</label>
                            <input
                                name="password"
                                onChange={ this.handleInputChange }
                                value={ password }
                                type="password"
                                className="form-control"
                                id="validationCustom02"
                                required
                                minLength="6"
                                maxLength="20" />
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={ this.onSubmit }>
                        Log In
                    </button>

                </form>
            </Page>
        );
    }

    handleInputChange = (e) => {
        const { target } = e;
        const value = target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    }

    onSubmit = (e) => {
        const { email, password } = this.state;

        e.preventDefault();
        e.stopPropagation();

        if (this.form.checkValidity() === true) {
            UserService.login({ email, password })
            .then((resp) => {
                let destination;

                switch (resp.role) {
                    case 'ADMIN':
                        destination = '/users';
                        break;
                    case 'MENTOR':
                    case 'MENTEE':
                    default:
                        destination = '/mentors';
                        break;
                }


                this.setState({ redirectTo: destination });
            })
            .catch((err) => {
                console.log('login failure: ', err);
            });
        } else {
            this.setState({ wasValidated: true });
        }
    }
}
