import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));
export default function Genders() {
    const classes = useStyles();
    const genders = ['male', 'female'];
    return (
        <Grid className={`${classes.paper}`} container spacing={3}>
            {genders.map(gender => (
                <Grid key={gender} item xs={6}>
                    <img src={`${gender}.png`} />
                </Grid>
            ))}
        </Grid>
    )
}
