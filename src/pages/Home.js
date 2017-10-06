import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={ this.handleButtonClick }>Test Button</button>
            </div>
        );
    }

    handleButtonClick() {
        axios.get('http://10.29.0.140:8080', {
            headers: {
                auth: { username: 'user', password: 'Promethean1' },
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
