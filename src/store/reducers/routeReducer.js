import {
  ADD_ROUTE,
  DELETE_ROUTE,
  UPDATE_ROUTE,
  SET_DATA,
  SET_LOADING,
  SET_ERROR,
} from '../actions/routes';

const initialState = {
  routes: [],
  loading: false,
  error: null,
};
const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.payload],
      };
    case UPDATE_ROUTE:
      return {
        ...state,
        routes: state.routes.map((route) =>
          route.id === action.payload.id ? action.payload : route
        ),
      };
    case DELETE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter((route) => route.id !== action.payload),
      };
    case SET_DATA:
      return {
        ...state,
        routes: action.payload,
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
export default routeReducer;
