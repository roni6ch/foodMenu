import React, { useContext, useEffect } from 'react';
import { formConstants } from '../../../helpers/constants';
import { makeStyles } from "@material-ui/core/styles";
/* material-ui */
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
/* store */
import FormContext from "../../../store/FormContext";
import FlowContext from "../../../store/FlowContext";

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        margin: '0 auto'
    }
}));
export default function Activity() {
    const classes = useStyles();
    const { flowState, flowDispatch } = useContext(FlowContext);
    const { formState, formDispatch } = useContext(FormContext);

    useEffect(() => {
        if (formState.activity)
        flowDispatch({ type: 'NEXT_STEP_STATUS', payload: true });
    }, [formState.activity, flowDispatch]);

    return (<>
        <RadioGroup aria-label="activity" name="activity" value={formState.activity}
            className={`${classes.radioGroup} slide-in-blurred-top`}>
            {flowState.activities.map((activity, i) =>
                <FormControlLabel key={i} value={i} control={<Radio />} label={activity}
                    onChange={() => formDispatch({ type: formConstants.ACTIVITY, payload: i })} />
            )}
        </RadioGroup>
    </>
    )
}
