import axios from 'axios'

const url=import.meta.env.VITE_API_URL

export const SET_LOADING = 'SET_LOADING::UTILS';
export const SET_ERROR = 'SET_ERROR::UTILS';

export const SET_DATA_STRUCTURE = 'SET_DATA_STRUCTURE::UTILS';
export const SET_TRAIN = 'SET_TRAIN::UTILS';
export const SET_PREDICTIONS = 'SET_PREDICTIONS::UTILS';
export const SET_FILE_DATA = 'SET_FILE_DATA::UTILS';

export const setDataStructure = (dataStructure) => ({
  type: SET_DATA_STRUCTURE,
  payload: dataStructure
});
export const setPredictions = (predictions) => ({
  type: SET_PREDICTIONS,
  payload: predictions
});
export const setTrainState = (trainingData) => ({
  type: SET_TRAIN,
  payload: trainingData
});
export const setStoreData=(fileData)=>({
  type:SET_FILE_DATA,
  payload: fileData
})
export const setLoading=(loading)=>({
	type:SET_LOADING,
	payload:loading
})
export const setError=(error)=>({
	type:SET_ERROR,
	payload:error
})

export const fetchDataStructure = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${url}/utils/structure`);
    dispatch(setDataStructure(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
export const fetchSetAndTrainData = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post(`${url}/utils/train`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    dispatch(setTrainState(response.data));
    //Data has been successfully trained
    //An error occurred while training data
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchReTrainData=()=>async (dispatch)=>{
  dispatch(setLoading(true))
  try{
    const response = await axios.get(`${url}/utils/train`)
    dispatch(setTrainState(response.data))
    //Data has been successfully retrained
    //An error occurred while retraining data
  }catch(error){
    dispatch(setError(error))
  }finally{
    dispatch(false)
  }
}
export const fetchPredict = (data) => async (dispatch) => {
  console.log(data)
  dispatch(setLoading(true));
  try {
    const response = await axios.post(`${url}/utils/predict`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    dispatch(setPredictions(response.data));
    //Data that was predicted
    //Error predicting data 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};