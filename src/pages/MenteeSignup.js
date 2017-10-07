import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import Page from '../components/Page';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            wasValidated: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const { wasValidated, firstName, lastName, email, password } = this.state;

        return (
            <Page>
                <h1>Sign Up. Do Good.</h1>

                <form className={ classnames('container', { 'was-validated': wasValidated }) } id="needs-validation" noValidate ref={ (c) => { this.form = c; } }>
                    <div className="row">
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
                                placeholder="me@somewhere.com"
                                required />
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom05">Password</label>
                            <input
                                name="password"
                                onChange={ this.handleInputChange }
                                value={ password }
                                type="password"
                                className="form-control"
                                id="validationCustom05"
                                placeholder="Password"
                                required
                                minLength="6"
                                maxLength="20" />
                            <div className="invalid-feedback">
                                Please provide a password of 6 to 20 characters.
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={ this.onSubmit }>Submit</button>
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
            console.log('valid and submitting: ', { firstName, lastName, email, password });
            // TODO: submit the form
        } else {
            this.setState({ wasValidated: true });
        }
    }
}
