import React , { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormContext from "../../store/FormContext";
import { formConstants } from '../../helpers/constants';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    gender:{
        "&:hover , &:active":{
            backgroundColor: theme.palette.primary.light,
            cursor:'pointer',
            borderRadius: '20px'
        }
    },
    active:{
        backgroundColor: theme.palette.primary.light,
        cursor:'pointer',
        borderRadius: '20px'
    }
}));
export default function Genders() {
    const classes = useStyles();
    const genders = ['male', 'female'];
    const {formState, formDispatch} = useContext(FormContext);
    return (
        <Grid className={`${classes.paper}`}  container spacing={3}>
            {genders.map(gender => (
                <Grid key={gender} item xs={6} >
                    <img src={`${gender}.png`} alt={`${gender}.png`} 
                    className={`${classes.gender} ${formState.gender === gender && classes.active} slide-in-blurred-top`} 
                    onClick={() => formDispatch({type: formConstants.GENDER,value: gender})}/>
                </Grid>
            ))}
        </Grid>
    )
}
