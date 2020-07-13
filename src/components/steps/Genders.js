import React , { useContext , useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormContext from "../../store/FormContext";
import FlowContext from "../../store/FlowContext";
import { formConstants } from '../../helpers/constants';

const useStyles = makeStyles((theme) => ({
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
    const { flowState, flowDispatch } = useContext(FlowContext);
    const { formState, formDispatch } = useContext(FormContext);

    useEffect(() => {
        if (formState.gender)
        flowDispatch({type: 'NEXT_STEP_STATUS', payload: true});
      },[formState.gender]);

    return (<>
            {genders.map(gender => (
                <Grid key={gender} item xs={6} >
                    <img src={`${gender}.png`} alt={`${gender}.png`} 
                    className={`${classes.gender} ${formState.gender === gender && classes.active} slide-in-blurred-top`} 
                    onClick={() => formDispatch({type: formConstants.GENDER, payload: gender})}/>
                </Grid>
            ))}
            </>
    )
}
