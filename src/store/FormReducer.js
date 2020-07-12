
import { formConstants } from './../helpers/constants';
import { useReducer } from "reinspect";


const formReducer = (state, action) => {
  console.log(action);
  
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
    default:
      return state;
  }
};
//https://github.com/troch/reinspect - third is init, firth arg is id for the inspect
const useGlobalFormState = () => {
  const [formState, formDispatch] = useReducer(formReducer, {
    gender: '',
    measurments: {
      height: '',
      age: '',
      weight: '',
      target: ''
    }
  },null,'useGlobalFormState');
  return { formState, formDispatch };
};
export default useGlobalFormState;
