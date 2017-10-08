import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <hr />
                <Link to='/mentor-apply'><span>Apply to be a mentor</span></Link>
            </Page>
        );
    }

    renderMentorListItem = (mentor) => {
        const mentorLink = MentorService.getMentorLink(mentor);
        const { firstName, lastName, title, company, id } = mentor;

        return (
            <a
                className={ classnames('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start') }
                href={ mentorLink }
                key={ id }>
                <h2>{ `${firstName} ${lastName}` }</h2>
                <div>{ `${title} at ${company}` }</div>
            </a>
        )
    };
}
