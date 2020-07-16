
import { formConstants } from './../helpers/constants';
import { useReducer } from "reinspect";


const formReducer = (state, action) => {
  switch (action.type) {
    case formConstants.GENDER:
      return { ...state, gender: action.payload };
    case formConstants.HEIGHT:
      return { ...state, measurments: { ...state.measurments, height: action.payload } };
    case formConstants.WEIGHT:
      return { ...state, measurments: { ...state.measurments, weight: action.payload } };
    case formConstants.AGE:
      return { ...state, measurments: { ...state.measurments, age: action.payload } };
    case formConstants.TARGET:
      return { ...state, measurments: { ...state.measurments, target: action.payload } };
    case formConstants.ACTIVITY:
      return { ...state, activity: action.payload };
    case formConstants.MEAT:
      const meats = state.meats.slice();
      const meatIndex = meats.findIndex(meat => meat === action.payload);
      if (meatIndex === -1) meats.push(action.payload);
      else meats.splice(meatIndex,1);
      return { ...state, meats };
    default:
      return state;
  }
};
//https://github.com/troch/reinspect - third is init, firth arg is id for the inspect
const useGlobalFormState = () => {
  const [formState, formDispatch] = useReducer(formReducer, {
    gender: '',
    measurments: {
      height: 185,
      weight: 75,
      age: 25,
      target: 60
    },
    activity: null,
    meats:[]
  }, null, 'useGlobalFormState');
  return { formState, formDispatch };
};
export default useGlobalFormState;
