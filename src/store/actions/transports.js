import axios from 'axios'
const url=import.meta.env.VITE_API_URL
export const ADD_TRANSPORT='ADD_TRANSPORT::TRANSPORT'
export const UPDATE_TRANSPORT='UPDATE_TRANSPORT::TRANSPORT'
export const DELETE_TRANSPORT='DELETE_TRANSPORT::TRANSPORT'
export const SET_DATA='SET_DATA::TRANSPORT'
export const SET_LOADING='SET_LOADING::TRANSPORT'
export const SET_ERROR='SET_ERROR::TRANSPORT'


export const addTransport=(transport)=>({
	type:ADD_TRANSPORT,
	payload:transport
})
export const updateTransport=(transport)=>({
	type:UPDATE_TRANSPORT,
	payload:transport
})
export const deleteTransport=(transport)=>({
	type:DELETE_TRANSPORT,
	payload:transport
})

export const setLoading=(loading)=>({
	type:SET_LOADING,
	payload:loading
})
export const setData=(data)=>({
	type:SET_DATA,
	payload:data
})
export const setError=(error)=>({
	type:SET_ERROR,
	payload:error
})

export const fetchTransports=()=>async(dispatch)=>{
	dispatch(setLoading(true))
	try {
    const response = await axios.get(`${url}/transports`);
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
	finally{
		dispatch(setLoading(false))
}
}
/*сделать главную страницу со всем данными (маршруты и их транспорты)
сделать список карточек транспртов с маршрутами относящимся к ним
*/

