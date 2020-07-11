import React, { useContext, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import FlowContext from '../store/FlowContext';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));
export default function SideMenu() {
    const classes = useStyles();
    const { step } = useContext(FlowContext);
    const [stepState , setStepState] = useState(step);

    const steps = ['Gender', 'Measurments', 'Activity'];
    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Stepper activeStep={step} orientation="vertical">
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                    <Button disabled={step === 0} onClick={() => setStepState(stepState - 1) }>Back</Button>
                                    <Button variant="contained" color="primary" onClick={() => setStepState(stepState + 1) }>
                                        {step === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </Grid>
    )
}