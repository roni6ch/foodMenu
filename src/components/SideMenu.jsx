import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import FlowContext from "../store/FlowContext";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function SideMenu() {
  const classes = useStyles();
  const {flowState, flowDispatch} = useContext(FlowContext);
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Stepper activeStep={flowState.step} orientation="vertical">
          {flowState.stepNames.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
          </Paper>
          <pre>
        {JSON.stringify(flowState.globalState)}</pre>
    </Grid>
  );
}
