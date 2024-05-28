import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import ErrorComponent from "../layouts/Layout1/ErrorComponent2";
import TransportsPage from "../pages/TransportsPage";
import PredictPage from "../pages/PredictPage";


const router=createBrowserRouter([
	{
		path:'/',
		element:<Home/>,
		index:true,
		errorElement:<ErrorComponent/>
	},
	{
		path:'/transports',
		element:<TransportsPage/>
	},
	{
		path:'/predict',
		element:<PredictPage/>
	},
	
])
export default router