import React, { Component } from 'react';
import axios from 'axios';

import Button from 'material-ui/Button';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Button raised onClick={ this.handleButtonClick }>Test Button</Button>
            </div>
        );
    }

    handleButtonClick = () => {
        // const username = 'user';
        // const password = 'Promethean1';
        // const credentials = btoa (`${username}:${password}`);
        //
        // const basicAuth = `Basic ${credentials}`;

        axios.get('http://10.29.0.140:8080', {
            headers: {
                auth: { username: 'user', password: 'Promethean1' },
            },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
