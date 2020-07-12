import { useReducer } from "react";
import { constants } from './../helpers/constants';

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
});
  return {flowState, flowDispatch};
};
export default useGlobalFlowState;
