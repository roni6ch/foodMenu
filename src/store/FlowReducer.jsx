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
      menu:['bmi','food-menu'],
      step: 0,
      stepNames: ["genders", "measurments", "activity","meats"],
      activities: [
        "Almost no physical activity",
        "I often go for a walk",
        "I exercise 1 - 2 a week",
        "I exercise 3 - 5 times a week",
        "I exercise 5 - 7 times a week",
      ],
      meats: [
        {name:  "Beef"},
        {name:  "Chicken"},
        {name:  "Turkey"},
        {name:  "Fish"},
        {name:  "Pork"},
        {name:  "Shrimp"}
      ],

    measurments: [
      {
        name : "height",
        defaultValue : 175,
        min : 40,
        max : 220,
        step:1,
        marks:[{
          value: 160,
          label: '160',
        },
      {
        value: 170,
        label: '170',
      },{
          value: 180,
          label: '180',
        },]
      },
      {
        name : "weight",
        defaultValue : 75,
        min : 40,
        max : 150,
        step:1,
      },
      {
        name : "age",
        defaultValue : 25,
        min : 12,
        max : 100,
        step:1,
      },
      {
        name : "target",
        label : "target weight",
        defaultValue : 60,
        min : 40,
        max : 220,
        step:1,
      },
    ], 
      nextStepStatus: false,
    },
    null,
    "useGlobalFlowState"
  );
  return { flowState, flowDispatch };
};
export default useGlobalFlowState;
