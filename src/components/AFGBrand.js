import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Styles
import '../styles/afg-brand.css';

export default class AFGBrand extends Component {

    static defaultProps = {
        wrapperCls: '',
    };

    static propTypes = {
        wrapperCls: PropTypes.string,
    };

    render() {
        const { wrapperCls } = this.props;
        return (
            <div className={ classnames('advice-for-good-brand', wrapperCls) }>
                <div className="advice-for-good-brand__advice">
                    <span>Advice</span>
                    <span className="advice-for-good-brand__for">for</span>
                </div>
                <div className="advice-for-good-brand__good">Good</div>
            </div>
        );
    }
}
