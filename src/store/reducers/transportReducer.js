import {
  ADD_TRANSPORT,
  DELETE_TRANSPORT,
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
  UPDATE_TRANSPORT,
} from '../actions/transports';
const initialState = {
  transports: [],
  data: null,
  loading: false,
  error: null,
};
const transportReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSPORT:
      return {
        ...state,
        transports: [...state.transports, action.payload],
      };
    case UPDATE_TRANSPORT:
      return {
        ...state,
        transports: state.transports.map((transport) =>
          transport.id === action.payload.id ? action.payload : transport
        ),
      };
    case DELETE_TRANSPORT:
      return {
        ...state,
        transports: state.transports.filter(
          (transport) => transport.id !== action.payload
        ),
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default transportReducer;
