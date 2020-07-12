import React , {useContext} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import FormContext from "../../store/FormContext";
import { useState } from "reinspect";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));
export default function Genders() {
    const classes = useStyles();
    const {formState, formDispatch} = useContext(FormContext);
    return (
        <Grid className={`${classes.paper} slide-in-blurred-top`} container spacing={1}>
            {Object.keys(formState.measurments).map(key => <Grid xs={6} item key={key}>
                <TextField required id={key} type="number" label={key} 
                onChange={(e) => formDispatch({type: key.toLocaleUpperCase(), payload: e.target.value})}/>
            </Grid>)}
        </Grid>
    )
}
