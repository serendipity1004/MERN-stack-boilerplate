import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class TopNavigations extends React.Component {

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        1
                    </Grid>
                    <Grid item xs={3}>
                        2
                    </Grid>
                    <Grid item xs={3}>
                        3
                    </Grid>
                    <Grid item xs={3}>
                        4
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TopNavigations.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNavigations);