import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Editor, EditorState } from 'draft-js';

export default class MentorSignupForm extends Component {

    static defaultProps = {
        formData: {
            wasValidated: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            title: '',
            company: '',
            categories: [],
            descriptionEditorState: EditorState.createEmpty(),
        },
        handleInputChange: () => {},
        handleCategoryChange: () => {},
        handleDescriptionChange: () => {},
        handleSubmit: () => {},
    };

    static propTypes = {
        formData: PropTypes.object,
        handleInputChange: PropTypes.func,
        handleCategoryChange: PropTypes.func,
        handleDescriptionChange: PropTypes.func,
        handleSubmit: PropTypes.func,
    }

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const { formData } = this.props;
        const { wasValidated, firstName, lastName, email, password, title, company, categories, descriptionEditorState } = formData;

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
                            onChange={ this.onInputChange }
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
                            onChange={ this.onInputChange }
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
                            onChange={ this.onInputChange }
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
                            onChange={ this.onInputChange }
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
                            name="company"
                            onChange={ this.onInputChange }
                            value={ company }
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
                            name="title"
                            onChange={ this.onInputChange }
                            value={ title }
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
                        { descriptionEditorState &&
                            <Editor
                                editorState={ descriptionEditorState }
                                onChange={ this.onDescriptionChange } />
                        }
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
        );
    }

    renderCatCheckboxes(categories) {
        return categories.map(category =>
            <div className="form-check" key={ category.id }>
                <label className="form-check-label" htmlFor={ `${category.id}-checkbox` }>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={ category.value }
                        id={ `${category.id}-checkbox` }
                        onChange={ e => this.onCategoryChange(category, e.target.checked) } />
                    { category.name }
                </label>
            </div>
        );
    }

    onInputChange(e) {
        this.props.handleInputChange(e);
    }

    onCategoryChange(e, checked) {
        this.props.handleCategoryChange(e, checked);
    }

    onDescriptionChange(e) {
        this.props.handleDescriptionChange(e);
    }

    onSubmit(e) {
        const formIsValid = this.form.checkValidity();
        this.props.handleSubmit(e, formIsValid);
    }
}
