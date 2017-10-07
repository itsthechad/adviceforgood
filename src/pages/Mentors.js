import React, { Component } from 'react';
import classnames from 'classnames';

import Page from '../components/Page';
import MentorService from '../services/MentorService';

export default class Mentors extends Component {
    state = {};

    componentWillMount() {
        MentorService.getMentorList()
        .then((data) => {
            this.setState({ mentorsData: data });
        });
    }

    render() {
        const { mentorsData } = this.state;

        return (
            <Page clsPrefix='mentors'>
                <h1>Mentors</h1>
                <hr />
                { mentorsData &&
                    <div className='list-group'>
                        { mentorsData.data.map((mentor) => this.renderMentorListItem(mentor)) }
                    </div>
                }
            </Page>
        );
    }

    renderMentorListItem = (mentor) => {
        const mentorLink = MentorService.getMentorLink(mentor);
        const { firstName, lastName, title, company, slug } = mentor;

        return (
            <a
                className={ classnames('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start') }
                href={ mentorLink }
                key={ slug }>
                <h2>{ `${firstName} ${lastName}` }</h2>
                <div>{ `${title} at ${company}` }</div>
            </a>
        )
    };
}
