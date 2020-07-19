import React, { useContext, useEffect,Suspense, lazy } from "react";
import { useForm } from "react-hook-form";
import { constants } from "../../helpers/constants";
import { useState } from "reinspect";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
/* material-ui */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
/* store */
import FlowContext from "../../store/FlowContext";
/* Components */
import Finish from "./steps/Finish";
const Measurments = lazy(() => import("./steps/Measurments"));
const Activity = lazy(() => import("./steps/Activity"));
const Meats = lazy(() => import("./steps/Meats"));
const Genders = lazy(() => import("./steps/Genders"));

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
  const { handleSubmit } = useForm();
  const { flowState, flowDispatch } = useContext(FlowContext);
  const [level, setLevel] = useState(0);
  const onSubmit = (data) => console.log(data);
  const stepLevel = () => {
    switch (flowState.step) {
      case 0:
        return <Genders/>;
      case 1:
        return <Measurments/>;
      case 2:
        return <Activity/>;
      case 3:
          return <Meats/>;
      default:
        return;
    }
  };
  useEffect(() => {
    flowDispatch({ type: "NEXT_STEP_STATUS", payload: false });
    setLevel(stepLevel());
  }, [flowState.step,flowDispatch]);

  return (
    <Grid item xs={9}>
      <Paper className={classes.paper}>
        <form
          className={`${classes.dynamicComponentsWrapper}`}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
        >
          <h2>{flowState.stepNames[flowState.step]}</h2>
          <Grid className={`${classes.paper}`} container spacing={3}>
            
  <Suspense fallback={<div>Loading...</div>}>
          {flowState.step < flowState.stepNames.length ? level : <Finish />}
          </Suspense>
          </Grid>
        </form>
        <Divider light className={classes.divider} />
        {flowState.step < flowState.stepNames.length &&
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
            disabled={!flowState.nextStepStatus}
            onClick={() => flowDispatch({ type: constants.NEXT_STEP })}
          >
            {flowState.step === flowState.stepNames.length - 1
              ? "Finish"
              : "Next"}
          </Button>
        </Grid>
        }
      </Paper>
    </Grid>
  );
}
export default Base;
