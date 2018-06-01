import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const style = (theme) => ({
    root: {
        height: 'auto',
    },
    gap25: {
        margin: '25px 0 25px 0',
    },
    gap10: {
        margin: '10px 0 10px 0',
    },
});

/**
 * Banner
 */
class Banner extends React.Component {
    /**
     * @return {jsx}
     */
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="title">
                    Smaller
                </Typography>
                <Typography variant="display3" className={classes.gap10}>
                    Display This
                </Typography>
                <Typography variant="subheading">
                    Smaller
                </Typography>
                <Button variant="raised" color="secondary" className={classes.gap25}>
                    Click To View
                </Button>
            </div>
        );
    }
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Banner);
