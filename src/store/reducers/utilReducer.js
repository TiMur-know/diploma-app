import { SET_DATA, SET_ERROR, SET_LOADING,SET_PREDICTIONS, SET_DATA_STRUCTURE } from "../actions/utils"

const initialState={
	data: null,
  predictions: null,
  dataStructure: null,
  isLoading: false,
  error: null
}
const utilReducer=(state=initialState,action)=>{
	switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_PREDICTIONS:
      return {
        ...state,
        predictions: action.payload
      };
    case SET_DATA_STRUCTURE:
      return {
        ...state,
        dataStructure: action.payload
      };
    default:
      return state;
  }
}
export default utilReducer