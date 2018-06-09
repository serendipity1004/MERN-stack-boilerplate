import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {ProgressCarousel} from '../../components';

const styles = (theme) => ({
    root: {},
});

/**
 * Root
 */
class Root extends React.Component {
    /**
     * @return {jsx}
     */
    render() {
        return (
            <div>
                <ProgressCarousel/>
            </div>
        );
    }
}

export default withStyles(styles)(Root);
