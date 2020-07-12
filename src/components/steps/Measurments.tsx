import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));
export default function Genders() {
    const classes = useStyles();
    return (
        <Grid className={`${classes.paper}`} container spacing={3}>
            <Grid item>
                <TextField required id="height" type="number" label="Height (CM)" />
            </Grid>
            <Grid item>
                <TextField required id="age" type="number" label="Age" />
            </Grid>
            <Grid item>
                <TextField required id="weight" type="number" label="Weight (KG)" />
            </Grid>
            <Grid item>
                <TextField required id="target" type="number" label="Target Weight (KG)" />
            </Grid>
        </Grid>
    )
}
