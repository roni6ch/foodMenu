import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { constants } from "./../helpers/constants";
import FlowContext from "../store/FlowContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
/* Components */
import Genders from "./steps/Genders";
import Measurments from "./steps/Measurments";
import FormContext from "../store/FormContext";
import useGlobalFormState from "../store/FormReducer";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  divider: {
    marginBottom: "10px",
  },
  bottomWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  dynamicComponentsWrapper: {
    height: "400px",
  },
}));
function Base() {
  const classes = useStyles();
  const { flowState, flowDispatch } = useContext(FlowContext);
  const stepLevel = () => {
    switch (flowState.step) {
      case 0:
        return <Genders/>;
      case 1:
        return <Measurments />;
      default:
        return <Genders />;
    }
  };
  return (
    <Grid item xs={9}>
      <Paper className={classes.paper}>
        <FormContext.Provider value={useGlobalFormState()}>
          <form
            className={`${classes.dynamicComponentsWrapper}`}
            noValidate
            autoComplete="off"
          >
            {stepLevel()}
          </form>
        </FormContext.Provider>
        <Divider light className={classes.divider} />
        <Grid className={classes.bottomWrapper} container>
          <Button
            disabled={flowState.step === 0}
            onClick={() => flowDispatch({ type: constants.PREV_STEP })}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => flowDispatch({ type: constants.NEXT_STEP })}
          >
            {flowState.step === flowState.stepNames.length - 1
              ? "Finish"
              : "Next"}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default Base;
