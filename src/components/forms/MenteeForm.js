import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class MenteeForm extends Component {

    static defaultProps = {
        formData: {
            wasValidated: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        isAdmin: false,
        handleInputChange: () => {},
        handleSubmit: () => {},
    };

    static propTypes = {
        formData: PropTypes.object,
        isAdmin: PropTypes.bool,
        mdoe: PropTypes.string,
        handleInputChange: PropTypes.func,
        handleSubmit: PropTypes.func,
    };

    static MODE = {
        NEW_USER: 'NEW_USER',
        EDIT_USER: 'EDIT_USER',
    };

    render() {
        const { formData, isAdmin } = this.props;
        const { wasValidated, firstName, lastName, email, password, points } = formData;

        return (
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

                {/* Points */}
                { isAdmin &&
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom03">Points</label>
                            <input
                                name="points"
                                onChange={ this.handleInputChange }
                                value={ points }
                                type="number"
                                className="form-control"
                                id="validationCustom04" />
                            <div className="invalid-feedback">
                                Please give a valid points value.
                            </div>
                        </div>
                    </div>
                }

                {/* Submit */}
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={ this.handleSubmit }>
                    Submit
                </button>

            </form>
        );
    }

    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    };

    handleSubmit = (e) => {
        const { isAdmin } = this.props;
        const formIsValid = this.form.checkValidity();
        this.props.handleSubmit(e, isAdmin || formIsValid);
    };
}
