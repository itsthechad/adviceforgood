import React, { Component } from 'react';
import Page from '../components/Page';
import MentorService from '../services/MentorService';

export default class Mentors extends Component {
    render() {
        return (
            <Page clsPrefix='mentors'>
                <h1>List of Mentors</h1>
                <hr />
                <ul></ul>
            </Page>
        );
    }
}
