import { configureStore } from "@reduxjs/toolkit";
import transportReducer from "./reducers/transportReducer";
import routeReducer from "./reducers/routeReducer";
import utilReducer from "./reducers/utilReducer";

const store=configureStore({
	reducer:{
		transports:transportReducer,
		routes:routeReducer,
		utils:utilReducer
	}
})
export default store