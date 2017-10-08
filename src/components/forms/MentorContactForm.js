import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Editor, EditorState } from 'draft-js';

export default class MentorContactForm extends Component {

    static defaultProps = {
        formData: {
            wasValidated: false,
            msgBodyEditorState: EditorState.createEmpty(),
        },
        handleInputChange: () => {},
        handleMsgBodyChange: () => {},
        handleSubmit: () => {},
    };

    static propTypes = {
        formData: PropTypes.object,
        handleInputChange: PropTypes.func,
        handleMsgBodyChange: PropTypes.func,
        handleSubmit: PropTypes.func,
    }

    render() {
        const { formData } = this.props;
        const { wasValidated, msgBodyEditorState } = formData;

        return (
            <form
                className={ classnames('container', { 'was-validated': wasValidated }) }
                id="needs-validation"
                noValidate
                ref={ (c) => { this.form = c; } }>

                {/* Message Body  */}
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label>Message</label>
                        { msgBodyEditorState &&
                            <Editor
                                editorState={ msgBodyEditorState }
                                onChange={ this.onMsgBodyChange } />
                        }
                        <div className="invalid-feedback">
                            Please enter a message.
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

    onInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    onMsgBodyChange = (e) => {
        this.props.handleMsgBodyChange(e);
    }

    onSubmit = (e) => {
        const formIsValid = this.form.checkValidity();
        this.props.handleSubmit(e, formIsValid);
    }
}
