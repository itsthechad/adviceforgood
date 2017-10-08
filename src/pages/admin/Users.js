import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import Page from '../../components/Page';

// Services
import UserService from '../../services/UserService';

export default class Users extends Component {

    state = {};

    componentWillMount() {
        UserService.getUsers().then((resp) => {
            this.setState({ usersData: resp.data });
        });
    }

    render() {
        const { usersData } = this.state;

        return (
            <Page clsPrefix='users'>
                <h1>Manage Users</h1>
                <hr />
                { usersData &&
                    <div className='list-group'>
                        { usersData.map((user) => this.renderUserListItem(user)) }
                    </div>
                }
            </Page>
        )
    }

    renderUserListItem = (user) => {
        const { firstName, lastName, id, role } = user;
        const userLink = UserService.getUserLink(user);

        return (
            <a
                className={ classnames('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start') }
                href={ userLink }
                key={ id }>
                <h2>{ `${firstName} ${lastName}` }</h2>
                <div>{ role }</div>
            </a>
        )
    };
}
