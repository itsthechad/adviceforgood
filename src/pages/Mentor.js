import React, { Component } from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Page from '../components/Page';
import MentorService from '../services/MentorService';

export default class Mentor extends Component {

    state = {};

    componentWillMount() {
        MentorService.getMentorById(this.props.match.params.mentorId)
        .then((data) => {
            let descriptionContent = '';
            if (data.description) {
                descriptionContent = EditorState.createWithContent(convertFromRaw(JSON.parse(data.description)));
            }
            this.setState({
                mentor: data,
                descriptionContent,
            });
        });
    }

    render() {
        const { mentor = {}, descriptionContent } = this.state;
        const { firstName, lastName, jobTitle, company } = mentor;

        return (
            <Page clsPrefix='mentor'>
                <h1>{ `${firstName} ${lastName}` }</h1>
                <div>{ `${jobTitle} at ${company}` }</div>
                { descriptionContent &&
                    <Editor
                        editorState={ descriptionContent }
                        readOnly />
                }
                <div>
                    <h2>Get Coffee <small>(45 minutes)</small></h2>
                    <div>Meet with the mentor at a coffee shop of their choosing.</div>
                    <Link to={ { pathname: '/contact-mentor', state: { mentor: mentor, mentorshipTier: 'TIER_TWO' } } }><button className={ classnames('btn', 'btn-primary') }>Redeem</button></Link>
                </div>
                <div>
                    <h2>Phone Call <small>(30 minutes)</small></h2>
                    <div>30 minutes to pick your mentor's brain.</div>
                    <Link to={ { pathname: '/contact-mentor', state: { mentor: mentor, mentorshipTier: 'TIER_TWO' } } }><button className={ classnames('btn', 'btn-primary') }>Redeem</button></Link>
                </div>
            </Page>
        );
    }

    onDescriptionChange = (editorState) => {
        this.setState({ descriptionState: editorState });
    }
}
