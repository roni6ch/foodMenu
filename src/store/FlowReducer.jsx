import { constants } from './../helpers/constants';
import { useReducer } from "reinspect";

const flowReducer = (state, action) => {
  switch (action.type) {
    case constants.NEXT_STEP:
      return { ...state, step: state.step + 1};
    case constants.PREV_STEP:
      return { ...state, step: state.step - 1};
    default:
      return state;
  }
};

const useGlobalFlowState = () => {
  const [flowState, flowDispatch] = useReducer(flowReducer, {  
    step : 0,
    stepNames: ['Gender', 'Measurments', 'Activity']
},null,'useGlobalFlowState');
  return {flowState, flowDispatch};
};
export default useGlobalFlowState;
