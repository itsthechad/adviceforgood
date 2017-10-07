import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={ this.handleButtonClick } type="button" class="btn btn-primary">Test Button</button>
            </div>
        );
    }

    handleButtonClick() {
        axios.post('http://192.168.1.200:8080/register', {
            data: {
                username: 'blah',
                password: '12345',
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
