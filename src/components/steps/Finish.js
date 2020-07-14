import React, { useContext, useEffect } from 'react';
import { formConstants } from '../../helpers/constants';
import { makeStyles } from "@material-ui/core/styles";
import { PieChart } from 'react-minimal-pie-chart';
/* material-ui */

/* store */
import FormContext from "../../store/FormContext";
import FlowContext from "../../store/FlowContext";

const useStyles = makeStyles((theme) => ({
}));
export default function Finish() {
    const classes = useStyles();
    const { flowState, flowDispatch } = useContext(FlowContext);
    const { formState, formDispatch } = useContext(FormContext);

    return (<>
         <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
    </>
    )
}
