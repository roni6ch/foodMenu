import { useReducer } from "react";

const flowReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1};
    case "PREV_STEP":
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
