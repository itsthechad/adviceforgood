import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Page from '../components/Page';
import MentorService from '../services/MentorService';

// Styles
import '../styles/mentors.css';

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
                <div className="become-a-mentor">
                    <h1>Interested in offering your mentorship?</h1>
                    <p>
                        Advice for Good is always looking for accomplished professionals who enjoy mentoring, and who are willing to share their time and advice in exchange for earning support for their favorite charities. If that sounds like you, click the button below to get started.
                    </p>
                    <Link to='/mentor-apply'>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Become a Mentor</button>
                    </Link>
                </div>
            </Page>
        );
    }

    renderMentorListItem = (mentor) => {
        const mentorLink = MentorService.getMentorLink(mentor);
        const { firstName, lastName, jobTitle, company, id } = mentor;

        return (
            <a
                className={ classnames('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start') }
                href={ mentorLink }
                key={ id }>
                <h2>{ `${firstName} ${lastName}` }</h2>
                <div className="mentor-item__title">{ `${jobTitle} at ${company}` }</div>
            </a>
        )
    };
}
