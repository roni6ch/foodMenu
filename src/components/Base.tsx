import React, { useContext, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
/* Components */
import Genders from './steps/Genders';
import FlowContext from '../store/FlowContext';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    divider:{
        marginBottom:'10px'
    }
}));
function Base() {
    const classes = useStyles();
    const { globalState, globalDispatch } = useContext(FlowContext);

    return (
        <Grid item xs={9}>
            <Paper className={classes.paper}>
                <Genders />
                <Divider light  className={classes.divider} />
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                <Button disabled={globalState.step === 0} onClick={() => globalDispatch({type:'PREV_STEP'}) }>Back</Button>
                    <Button variant="contained" color="primary" onClick={() => globalDispatch({type:'NEXT_STEP'}) }>
                        {globalState.step === globalState.stepNames.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Base;