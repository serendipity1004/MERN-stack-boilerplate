import React from 'react';
import {withStyles} from 'material-ui';
import PropTypes from 'prop-types';

const style = (theme) => ({});

/**
 * TopNav
 */
class TopNav extends React.Component {
    /**
     * @return {jsx}
     */
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

            </div>
        );
    }
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(TopNav);
