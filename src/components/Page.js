import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/* Page component that abstracts out the basic page dom.
 * Prefixes all base class names with the value of the clsPrefix prop.
 */
export default class Page extends Component {

    static propTypes = {
        clsPrefix: PropTypes.string,
    }

    render() {
        const { clsPrefix, children } = this.props;

        return(
            <div className={ classnames('page', `${clsPrefix}-page`) }>
                { children }
            </div>
        );
    }
}
