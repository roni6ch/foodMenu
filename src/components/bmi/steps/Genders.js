import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormContext from "../../../store/FormContext";
import FlowContext from "../../../store/FlowContext";
import { formConstants } from '../../../helpers/constants';

const useStyles = makeStyles((theme) => ({
    gendersWrapper:{
        margin: '0px auto',
    },
    gender: {
        padding: '10px',
        width: '200px',
        margin: '0px 5px',
        "&:hover , &:active": {
            backgroundColor: theme.palette.primary.dark,
            cursor: 'pointer',
            borderRadius: '20px'
        }
    },
    active: {
        backgroundColor: theme.palette.primary.dark,
        cursor: 'pointer',
        borderRadius: '20px'
    }
}));
export default function Genders() {
    const classes = useStyles();
    const genders = ['male', 'female'];
    const { flowDispatch } = useContext(FlowContext);
    const { formState, formDispatch } = useContext(FormContext);

    useEffect(() => {
        if (formState.gender)
            flowDispatch({ type: 'NEXT_STEP_STATUS', payload: true });
    }, [formState.gender, flowDispatch]);

    return (<>
    <div className={`${classes.gendersWrapper}`}>
        {genders.map(gender => (
            <img src={`${gender}.png`} alt={`${gender}.png`} key={gender} 
                className={`${classes.gender} ${formState.gender === gender && classes.active} slide-in-blurred-top`}
                onClick={() => formDispatch({ type: formConstants.GENDER, payload: gender })} />
        ))}
        </div>
    </>
    )
}
