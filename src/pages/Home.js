import React, { Component } from 'react';

// Components
import Page from '../components/Page';

export default class Home extends Component {

    render() {
        return (
            <Page>
                <h1>Home Page</h1>
                <p>
                    Advice for Good is a platform where volunteer-minded people who need business advice can earn time with a
                    mentor in exchange for charitable service. This is a ‘good goes around’ solution where people can give to one
                    another and their community by connecting with one another.
                </p>
            </Page>
        );
    }
}
