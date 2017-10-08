import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import Page from '../components/Page';

// Services
import UserService from '../services/UserService';

export default class Login extends Component {

    state = {
        wasValidated: false,
    };

    render() {
        const { email, password, wasValidated } = this.state;

        return (
            <Page clsPrefix='login'>
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
                            <label htmlFor="validationCustom03">Email</label>
                            <input
                                name="email"
                                onChange={ this.handleInputChange }
                                value={ email }
                                type="email"
                                className="form-control"
                                id="validationCustom01"
                                required />
                            <div className="invalid-feedback">
                                Please provide the email address associated with your Advice for Good account.
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

    onSubmit(e) {
        const { email, password } = this.state;

        e.preventDefault();
        e.stopPropagation();

        if (this.form.checkValidity() === true) {
            UserService.login({ email, password })
            .then(() => {
                this.setState({ loginSuccess: true });
            });
        } else {
            this.setState({ wasValidated: true });
        }
    }
}