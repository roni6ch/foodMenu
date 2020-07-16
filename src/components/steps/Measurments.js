import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
/* store */
import FormContext from "../../store/FormContext";
import FlowContext from "../../store/FlowContext";
/* material-ui */
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
    textField: {
        textTransform: 'capitalize'
    }
}));
export default function Genders() {
    const classes = useStyles();
    const { errors, register } = useForm({ mode: 'onChange' });
    const { formState, formDispatch } = useContext(FormContext);
    const { flowState,flowDispatch } = useContext(FlowContext);

    
    useEffect(() => {
        flowDispatch({ type: 'NEXT_STEP_STATUS', payload: true });
        /*const emptyFields = Object.values(formState.measurments).some(field => {
            return field === ""
        });
        if (Object.keys(errors).length === 0 && !emptyFields)
            flowDispatch({ type: 'NEXT_STEP_STATUS', payload: true });
        else
            flowDispatch({ type: 'NEXT_STEP_STATUS', payload: false });*/
    }, []);

     const handleChange = (name, newValue) => {
       formDispatch({ type: name.toLocaleUpperCase(), payload: newValue });
    };

    return (<>
      <Box display="flex" flexDirection="column" m={1} style={{ width: '100%' }}>
      {flowState.measurments.map(val =>
             <Box p={1} key={val.name}  className={`${classes.textField} slide-in-blurred-top`}>
                    <Typography id="discrete-slider-always" gutterBottom >
                        {val.label ? val.label : val.name}
                    </Typography>
                    <Slider
                        step={val.step}
                        value={formState.measurments[val.name] === 0 ? val.defaultValue : formState.measurments[val.name]}
                        min={val.min}
                        max={val.max}
                        valueLabelDisplay="on"
                        onChange={(event, value) => handleChange(val.name, value)}
                    />
                    </Box>
            )}
      </Box>

        {/* {Object.keys(formState.measurments).map(key => <Grid xs={6} item key={key}>
                <TextField id={key} type="number" label={key} name={key} defaultValue={formState.measurments[key]}
                className={`${classes.textField} slide-in-blurred-top`}
                    inputRef={register({ required: true, minLength: 0, maxLength: 4 })}
                    error={errors[key] ? true : false}
                    helperText={[
                        errors[key]?.type === "required" && `${key} is required`,
                        errors[key]?.type === "minLength" && `${key} minLength`,
                        errors[key]?.type === "maxLength" && `${key} maxLength`
                    ]}
                    onChange={(e) => formDispatch({ type: key.toLocaleUpperCase(), payload: e.target.value })}
                />
            </Grid>)} */}
    </>
    )
}
