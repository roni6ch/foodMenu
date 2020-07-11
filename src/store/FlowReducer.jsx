import { useReducer } from "react";
import FlowContext from "./FlowContext";

const flowReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        step: state.step + 1,
      };
    case "PREV_STEP":
      return {
        step: state.step - 1,
      };
    default:
      return state;
  }
};

const useGlobalFlowState = () => {
  const [globalState, globalDispatch] = useReducer(flowReducer, {});
  return {globalState, globalDispatch};
};
export default useGlobalFlowState;
