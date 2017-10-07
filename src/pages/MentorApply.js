import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import Page from '../components/Page';

// Services
import MentorService from '../services/MentorService';

export default class MentorApply extends Component {
    constructor() {
        super();

        this.state = {
            wasValidated: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            businessName: '',
            businessRole: '',
            description: '',
            categories: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const { wasValidated, firstName, lastName, email, password, businessName, businessRole, description, categories } = this.state;

        return (
            <Page>
                <h1>Apply to be a Mentor</h1>

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

                    <div className="row">
                        {/* Business Name */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom05">Organization Name</label>
                            <input
                                name="businessName"
                                onChange={ this.handleInputChange }
                                value={ businessName }
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                placeholder="Business or organization name"
                                required />
                            <div className="invalid-feedback">
                                Please provide your business name.
                            </div>
                        </div>

                        {/* Business Role */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom06">Role</label>
                            <input
                                name="businessRole"
                                onChange={ this.handleInputChange }
                                value={ businessRole }
                                type="text"
                                className="form-control"
                                id="validationCustom06"
                                placeholder="Role, title, or position"
                                required />
                            <div className="invalid-feedback">
                                Please provide your role.
                            </div>
                        </div>
                    </div>

                    {/* Categories  */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            { categories && this.renderCatCheckboxes(categories) }
                        </div>
                    </div>

                    {/* Description  */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="validationCustom08">Description</label>
                            <textarea
                                name="description"
                                onChange={ this.handleInputChange }
                                value={ description }
                                type="text"
                                className="form-control"
                                id="validationCustom08"
                                placeholder="A brief biography explaining why volunteers would want your services as a mentor."
                                required />
                            <div className="invalid-feedback">
                                Please provide a description.
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

    componentDidMount() {
        this.initCategories()
        .then((categories) => {
            this.setState({ categories: categories });
        });
    }

    renderCatCheckboxes(categories) {
        return categories.map(category =>
            <div className="form-check" key={ category.id }>
                <label className="form-check-label" htmlFor={ `${category.id}-checkbox` }>
                    <input className="form-check-input" type="checkbox" value={ category.value } />
                    { category.name }
                </label>
            </div>
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

    // Get all categories from back-end and init them to false (not selected)
    initCategories() {
        return MentorService.getMentorCategories()
        .then((categories) => {
            categories.forEach((category) => {
                category.value = false;
            });
            return categories;
        });
    }

}
