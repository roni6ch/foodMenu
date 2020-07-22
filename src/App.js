import React from "react";
import "./App.scss";
import ErrorBoundry from './ErrorBoundry';
/* material-ui */
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
/* store */
import useGlobalFlowState from "./store/FlowReducer";
import useGlobalFormState from "./store/FormReducer";
import FlowContext from "./store/FlowContext";
import FormContext from "./store/FormContext";
/* Components */
import Header from "./components/Header";
import Bmi from "./components/bmi/Bmi";
import FoodMenu from "./components/food-menu/FoodMenu";
import Welcome from "./components/Welcome";
import NoMatch from "./components/NoMatch";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
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
    <ErrorBoundry>
      <Router>
        <FlowContext.Provider value={useGlobalFlowState()}>
          <FormContext.Provider value={useGlobalFormState()}>
            <Header />
            <Container fixed>
              <div className={classes.root}>
                <Switch>
                  <Route path="/" exact component={Welcome} />
                  <Route path="/bmi" component={Bmi} />
                  <Route path="/food-menu" component={FoodMenu} />
                  <Route path="*">
                    <NoMatch />
                </Route>
                </Switch>
              </div>
            </Container>
          </FormContext.Provider>
        </FlowContext.Provider>
      </Router>
      </ErrorBoundry>
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
