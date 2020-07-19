import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
/* store */
import FlowContext from "../store/FlowContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 100,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "& .MuiLink-root": {
      textDecoration: "none"
    }
  },
}));

export default function Welcome() {
  const [spacing, setSpacing] = React.useState(2);
  const { flowState, flowDispatch } = useContext(FlowContext);
  const classes = useStyles();
  const navLinkRef = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center" spacing={spacing}>
          {flowState.menu.map((value, index) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <Link href="#" exact component={navLinkRef} to={value}>
                  {value}
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
