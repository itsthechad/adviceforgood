import React, { Component } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import { Redirect } from 'react-router';

// Components
import Page from '../components/Page';
import MentorForm from '../components/forms/MentorForm';

// Services
import MentorService from '../services/MentorService';
import MenteeService from '../services/MenteeService';
import UserService from '../services/UserService';

// *
// * Create or edit a mentor account
// * TODO: Improve password functionality (both create and edit)
// *
export default class MentorApply extends Component {
    constructor() {
        super();

        const user = UserService.getCurrentUser() || {};
        const { firstName, lastName, email, company, title, categories, description, id } = user;

        this.state = {
            wasValidated: false,
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            password: '',
            company: company || '',
            title: title || '',
            categories: categories || [],
            descriptionEditorState: description ? EditorState.createWithContent(convertFromRaw(JSON.parse(description))) : EditorState.createEmpty(),
            formSubmittedSuccessfully: false,
            existingUserId: id || '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const { wasValidated, firstName, lastName, email, password, company, title, categories, descriptionEditorState, formSubmittedSuccessfully } = this.state;
        const user = UserService.getCurrentUser() || {};

        const formData = {
            wasValidated,
            firstName,
            lastName,
            email,
            password,
            company,
            title,
            categories,
            descriptionEditorState,
        };

        if (formSubmittedSuccessfully) {
            return <Redirect to="/mentor-apply-confirmation" />;
        }

        let pageHeader = <h1>Apply to be a Mentor</h1>;
        if (user.id) {
            pageHeader = <h1>Edit Mentor Account</h1>;
        }

        return (
            <Page>
                { pageHeader }
                <MentorForm
                    formData={ formData }
                    handleInputChange={ this.onInputChange }
                    handleCategoryChange={ this.onCategoryChange }
                    handleDescriptionChange={ this.onDescriptionChange }
                    handleSubmit={ this.onSubmit } />
            </Page>
        );
    }

    componentDidMount() {
        this.initCategories()
        .then((categories) => {
            this.setState({ categories: categories });
        });
    }

    onInputChange(e) {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    }

    onCategoryChange = (changedCategory, checked) => {
        const { categories } = this.state;
        const updatedCategories = categories.map((category) => {
            if (changedCategory.id === category.id) category.value = checked;
            return category;
        });
        this.setState({ categories: updatedCategories });
    }

    onDescriptionChange(editorState) {
        this.setState({ descriptionEditorState: editorState });
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
        const { firstName, lastName, email, password, title, company, descriptionEditorState, categories, existingUserId } = this.state;

        const filteredCategories = categories.reduce((res, category) => {
            if (category.value) res.push(category.id);
            return res;
        }, []);

        MenteeService.users({
            firstName,
            lastName,
            email,
            password,
            title,
            company,
            categories: filteredCategories,
            descriptionEditorState
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
