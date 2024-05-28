import { useDispatch } from 'react-redux';
import Button from '../../components/UI/Button';
import Layout_1 from '../../layouts/Layout1';
import { fetchDataStructure, fetchPredict, fetchReTrainData, fetchSetAndTrainData } from '../../store/actions/utils';
import { useEffect, useState } from 'react';
import LoadFileComponent from '../../components/UI/LoadDataComponent';

const PredictPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
	const handleFetchDataStructure = () => {
    dispatch(fetchDataStructure);
  };

  const handleSaveAndTrainDataFile = () => {
    dispatch(fetchSetAndTrainData);
  };
	const handleReTrainData=()=>{
		dispatch(fetchReTrainData)
	}
  const handlePredictData = () => {
    dispatch(fetchPredict);
  };
	useEffect(()=>{

	},[dispatch])
  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <Layout_1>
			<div>
      <div>
				<Button text='Get Data Structure' onClick={handleFetchDataStructure} />
				<Button text='Re-train model' onClick={handleReTrainData} />
				<Button text='Set and Train Data' onClick={handleSaveAndTrainDataFile} />
				<Button text='Predict Data' onClick={handlePredictData} />
			</div>
			<h2 className="text-2xl font-bold mb-4">Train values</h2>
			<div className="mb-4 p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Example Routes</h3>
          <div className="overflow-x-auto">
            
          </div>
      </div>
			<div className="mb-4 p-4 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-2">Example Transports</h3>
        <div className="overflow-x-auto">
          {/* Здесь разместите таблицу с 10 транспортами */}
        </div>
      </div>
			<div className="mb-4 p-4 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-2">Predicted Values</h3>
        <div className="overflow-x-auto">
          {/* Здесь разместите таблицу с предсказанными значениями */}
        </div>
      </div>
			<div className="mb-4 p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Different Graphics</h3>
          <div className="overflow-x-auto">
            {/* Здесь разместите различные графики */}
          </div>
        </div>
				
        <div className="flex space-x-4">
          <Button text="Save and Train Data File" onClick={handleSaveAndTrainDataFile} />
          <Button text="Predict Data" onClick={handlePredictData} />
        </div>
      </div>
      <LoadFileComponent isOpen={handleModal} onClose={handleModal} />
    </Layout_1>
  );
};
export default PredictPage;
