import React from "react";
import "./App.scss";
/* material-ui */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
/* store */
import useGlobalFlowState from "./store/FlowReducer";
import useGlobalFormState from "./store/FormReducer";
import FlowContext from "./store/FlowContext";
import FormContext from "./store/FormContext";
/* Components */
import Header from "./components/Header";
import Bmi from "./components/Bmi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
      <Router>
        <FlowContext.Provider value={useGlobalFlowState()}>
          <FormContext.Provider value={useGlobalFormState()}>
            <Header />
            <Container fixed>
              <div className={classes.root}>


           <Switch>
                <Route path="/" component={Bmi} />
         </Switch>

               
              </div>
            </Container>
          </FormContext.Provider>
        </FlowContext.Provider>
      </Router>
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
