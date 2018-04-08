import React from 'react';
import {withStyles} from 'material-ui/styles';

const style = theme => ({
    root: {}
});

class Button extends React.Component {

    render() {
        const {classes, type} = this.props;

        return (
            <Button className={() => {
                switch(type){
                    case 'primary':

                        break;

                    default:
                        break;
                }
            }}>

            </Button>
        )
    }
}

export default withStyles(style)(Button);