import {
  SET_ERROR,
  SET_LOADING,
  SET_PREDICTIONS,
  SET_DATA_STRUCTURE,
  SET_TRAIN,
  SET_FILE_DATA
} from '../actions/utils';

const initialState = {
  trainData: null,
  predictions: null,
  dataStructure: null,
  uploadResult: null,

  data: null,
  isLoading: false,
  error: null,
};
const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_PREDICTIONS:
      return {
        ...state,
        predictions: action.payload,
      };
    case SET_DATA_STRUCTURE:
      return {
        ...state,
        dataStructure: action.payload,
      };
    case SET_TRAIN:
      return {
        ...state,
        trainData: action.payload,
      };
    case SET_FILE_DATA:
      return{
        ...state,
        uploadResult:action.payload,
      }

    default:
      return state;
  }
};
export default utilReducer;
