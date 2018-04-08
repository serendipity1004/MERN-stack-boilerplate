import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {Banner} from '../../components';

const style = theme => ({
    root: {
        width: '100%',
        height: 700,
        backgroundColor: '#DEE6EF'
    },
    stepperContainer: {
        position: 'absolute',
        height: 'inherit',
        paddingLeft: 50,
        width: 100
    },
    stepperNumber: {
        fontWeight: 'bold'
    }
});

class ProgressCarousel extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction="column" justify="center" className={classes.stepperContainer}>
                    <Typography variant="title" className={classes.stepperNumber} align="center">
                        01
                    </Typography>
                    <Typography variant="title" align="center">
                        |
                    </Typography>
                    <Typography variant="title" className={classes.stepperNumber} align="center">
                        02
                    </Typography>
                    <Typography variant="title" align="center">
                        |
                    </Typography>
                    <Typography variant="title" className={classes.stepperNumber} align="center">
                        03
                    </Typography>
                    <Typography variant="title" align="center">
                        |
                    </Typography>
                    <Typography variant="title" className={classes.stepperNumber} align="center">
                        04
                    </Typography>
                </Grid>
                <Grid container justify="center" style={{height:'100%'}}>
                    <Grid item md={6} style={{height:'100%'}}>
                        <Grid container direction="column" alignItems="center" justify="center" style={{height:'inherit'}}>
                            <Banner/>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <img src={require('../../resources/img/landscape1.jpg')} style={{height:'100%', width:'90%', transform:'translate(0, 50px)'}}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(style)(ProgressCarousel);