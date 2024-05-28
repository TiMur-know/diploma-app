import axios from 'axios'
const url=import.meta.env.VITE_API_URL

export const ADD_ROUTE='ADD_ROUTE::ROUTE'
export const UPDATE_ROUTE='UPDATE_ROUTE::ROUTE'
export const DELETE_ROUTE='DELETE_ROUTE::ROUTE'
export const SET_ROUTES='SET_DATA::ROUTE'

export const SET_DATA='SET_DATA::ROUTENET'
export const SET_LOADING='SET_LOADING::ROUTENET'
export const SET_ERROR='SET_ERROR::ROUTENET'


export const addRoute=(route)=>({
	type:ADD_ROUTE,
	payload:route
})
export const updateRoute=(route)=>({
	type:UPDATE_ROUTE,
	payload:route
})
export const deleteRoute=(route)=>({
	type:DELETE_ROUTE,
	payload:route
})

export const setLoading=(loading)=>({
	type:SET_LOADING,
	payload:loading
})
export const setData=(data)=>({
	type:SET_DATA,
	payload:data
})
export const setRoutes=(data)=>({
	type:SET_ROUTES,
	payload:data
})
export const setError=(error)=>({
	type:SET_ERROR,
	payload:error
})

export const fetchRoutes=()=>async(dispatch)=>{
	dispatch(setLoading(true))
	try {
		console.log(url)
    const response = await axios.get(`${url}/routes`);
    dispatch(setData(response.data));
		dispatch(setRoutes(response.data))
  } catch (error) {
    dispatch(setError(error.message));
  }
	finally{
		dispatch(setLoading(false))
	}
}
export const fetchRoutesPasang=()=>async(dispatch)=>{
	dispatch(setLoading(true))
	try {
		console.log(url)
		console.log(`${url}/routes`)
    const response = await axios.get(`${url}/routes/pasang`);
    dispatch(setData(response.data));
		dispatch(setRoutes(response.data))
  } catch (error) {
    dispatch(setError(error.message));
  }
	finally{
		dispatch(setLoading(false))
	}
}