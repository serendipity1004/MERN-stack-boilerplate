import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {}
});

class Root extends React.Component {
    render() {
        return (
            <div>
                Root
            </div>
        )
    }
}

export default withStyles(styles)(Root);