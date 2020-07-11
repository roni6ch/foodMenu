import { createContext } from 'react';
const FlowContext = createContext({  
    step : 0,
    stepNames: ['Gender', 'Measurments', 'Activity']
});
export default FlowContext;
