import { useReducer } from "react";
import { formConstants } from './../helpers/constants';

const formReducer = (state, action) => {
  switch (action.type) {
    case formConstants.GENDER:
      return { ...state, gender: action.value};
    default:
      return state;
  }
};

const useGlobalFormState = () => {
  const [formState, formDispatch] = useReducer(formReducer, {});
  return {formState, formDispatch};
};
export default useGlobalFormState;
