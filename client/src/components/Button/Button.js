import React from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';

const style = (theme) => ({
    root: {},
});

/**
 * Button Class
 */
class Button extends React.Component {
    /**
     * @return {jsx}
     */
    render() {
        const {type} = this.props;

        return (
            <Button className={() => {
                switch (type) {
                    case 'primary':

                        break;

                    default:
                        break;
                }
            }}>

            </Button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.object,
};

export default withStyles(style)(Button);
