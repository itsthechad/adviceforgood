import React, { Component } from 'react';
import classnames from 'classnames';
import { Redirect } from 'react-router';

// Components
import Page from '../components/Page';

// Services
import MenteeService from '../services/MenteeService';

export default class MenteeSignup extends Component {
    constructor() {
        super();

        this.state = {
            wasValidated: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            registerSuccess: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const { wasValidated, firstName, lastName, email, password, registerSuccess } = this.state;

        if (registerSuccess) {
            return <Redirect to="/signup-confirmation"/>;
        }

        return (
            <Page>
                <h1>Sign Up. Do Good.</h1>

                {/* Form */}
                <form
                    className={ classnames('container', { 'was-validated': wasValidated }) }
                    id="needs-validation"
                    noValidate
                    ref={ (c) => { this.form = c; } }>

                    <div className="row">
                        {/* First Name */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom01">First name</label>
                            <input
                                name="firstName"
                                onChange={ this.handleInputChange }
                                value={ firstName }
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="First name"
                                required />
                            <div className="invalid-feedback">
                                Please provide your first name.
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom02">Last name</label>
                            <input
                                name="lastName"
                                onChange={ this.handleInputChange }
                                value={ lastName }
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Last name"
                                required />
                            <div className="invalid-feedback">
                                Please provide your last name.
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom03">Email</label>
                            <input
                                name="email"
                                onChange={ this.handleInputChange }
                                value={ email }
                                type="email"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="me@example.com"
                                required />
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                        </div>
                    </div>

                    {/* Password  */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom04">Password</label>
                            <input
                                name="password"
                                onChange={ this.handleInputChange }
                                value={ password }
                                type="password"
                                className="form-control"
                                id="validationCustom04"
                                placeholder="Password"
                                required
                                minLength="6"
                                maxLength="20" />
                            <div className="invalid-feedback">
                                Please provide a password of 6 to 20 characters.
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={ this.onSubmit }>
                        Submit
                    </button>

                </form>
            </Page>
        );
    }

    handleInputChange(e) {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    }

    onSubmit(e) {
        const { firstName, lastName, email, password } = this.state;

        e.preventDefault();
        e.stopPropagation();

        if (this.form.checkValidity() === true) {
            MenteeService.register({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            })
            .then(() => {
                this.setState({ registerSuccess: true });
            })
            .catch(() => {
                console.log('failed');
                // Show error
            })
        } else {
            this.setState({ wasValidated: true });
        }
    }
}
