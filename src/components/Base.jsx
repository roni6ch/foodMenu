import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { constants } from "./../helpers/constants";
import { useState } from "reinspect";
/* material-ui */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
/* store */
import FlowContext from "../store/FlowContext";
/* Components */
import Genders from "./steps/Genders";
import Measurments from "./steps/Measurments";
import Activity from "./steps/Activity";

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
        return <Genders />;
      case 1:
        return <Measurments />;
      case 2:
        return <Activity />;
      default:
        return;
    }
  };
  useEffect(() => {
    flowDispatch({ type: "NEXT_STEP_STATUS", payload: false });
    setLevel(stepLevel());
  }, [flowState.step]);

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
          {level}
          </Grid>
        </form>

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
            disabled={!flowState.nextStepStatus}
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
