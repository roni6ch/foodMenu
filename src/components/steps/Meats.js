import React, { useContext, useEffect } from 'react';
import { formConstants } from '../../helpers/constants';
import { makeStyles } from "@material-ui/core/styles";
/* material-ui */
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
/* store */
import FormContext from "../../store/FormContext";
import FlowContext from "../../store/FlowContext";

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        margin: '0 auto'
    }, root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));
export default function Meats() {
    const classes = useStyles();
    const { flowState, flowDispatch } = useContext(FlowContext);
    const { formState, formDispatch } = useContext(FormContext);

    const handleChange = (item) => {
        formDispatch({ type: "MEAT", payload: item });
    };

    useEffect(() => {
        let payload = formState.meats.length ? true : false;
            flowDispatch({ type: 'NEXT_STEP_STATUS', payload });
    }, [formState.meats]);

    return (<>
        <FormGroup className={classes.radioGroup}>
            {flowState.meats.map((meat, index) => <FormControlLabel key={meat.name} 
                control={<Checkbox checked={formState.meats.find(m=> m === meat.name) ? true : false}  
                onChange={() => handleChange(meat.name)} name={meat.name} />}
                label={meat.name} />
            )}
        </FormGroup>
    </>
    )
}
