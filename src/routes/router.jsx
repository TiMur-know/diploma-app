import { createBrowserRouter } from "react-router-dom";
import Layout_1 from "../loyauts/Layout1/layout_1";
import Home from "../components/Home/Home";

const router=createBrowserRouter([
	{
		path:"/",
		element:<Layout_1/>,
		children:[
			{
				index:true,
				element:<Home/>
			}
		]
	}
])
export default router