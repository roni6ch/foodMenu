import { constants } from "./../helpers/constants";
import { useReducer } from "reinspect";

const flowReducer = (state, action) => {
  switch (action.type) {
    case constants.NEXT_STEP:
      return { ...state, step: state.step + 1 };
    case constants.PREV_STEP:
      return { ...state, step: state.step - 1 };
    case constants.NEXT_STEP_STATUS:
      return { ...state, nextStepStatus: action.payload };
    default:
      return state;
  }
};

const useGlobalFlowState = () => {
  const [flowState, flowDispatch] = useReducer(
    flowReducer,
    {
      step: 0,
      stepNames: ["Gender", "Measurments", "Activity"],
      activities: [
        "Almost no physical activity",
        "I often go for a walk",
        "I exercise 1 - 2 a week",
        "I exercise 3 - 5 times a week",
        "I exercise 5 - 7 times a week",
      ],
      nextStepStatus: false,
    },
    null,
    "useGlobalFlowState"
  );
  return { flowState, flowDispatch };
};
export default useGlobalFlowState;
