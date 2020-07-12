import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./App.scss";
/* Components */
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Base from "./components/Base";
import useGlobalFlowState from "./store/FlowReducer";
import FlowContext from "./store/FlowContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <> 
      <Header />
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <FlowContext.Provider value={useGlobalFlowState()}>
              <SideMenu />
              <Base/>
            </FlowContext.Provider>
          </Grid>
        </div>
      </Container>
    </>
  );
}
/*
Your genderMale
Physical Activity Completed
MeatCompleted
VeggiesCompleted
FruitsCompleted
ProductsCompleted
EverydayCompleted
Bad habitsCompleted
Number of meals per dayCompleted
Measurements // age/ weight/ height / target weight

https://material-ui.com/components/grid/
 */
