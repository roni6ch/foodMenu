import React, { useContext} from 'react';
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
    const {flowState, flowDispatch} = useContext(FlowContext);
    return (
        <Grid item xs={9}>
            {JSON.stringify(flowState)}
            <Paper className={classes.paper}> 
                <Genders />
                <Divider light  className={classes.divider} />
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                <Button disabled={flowState.step === 0} onClick={() => flowDispatch({type:'PREV_STEP'}) }>Back</Button>
                    <Button variant="contained" color="primary" onClick={() => flowDispatch({type:'NEXT_STEP'}) }>
                        {flowState.step === flowState.stepNames.length - 1 ? 'Finish' : 'Next'}
                    </Button>
    
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Base;