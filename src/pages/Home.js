import React, { Component } from 'react';
import ServiceWrapper from './../utils/ServiceWrapper';

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
        ServiceWrapper.post('/mentor/list', {
            data: {},
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
