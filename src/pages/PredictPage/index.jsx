import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransportSecondList from '../../components/TransportSecondList';
import Button from '../../components/UI/Button';
import LoadFileComponent from '../../components/UI/LoadDataComponent';
import Layout_1 from '../../layouts/Layout1';
import { fetchRoutes } from '../../store/actions/routes';
import {
  fetchDataStructure,
  fetchPredict,
  fetchReTrainData,
  fetchSetAndTrainData,
} from '../../store/actions/utils';
import RouteSecondList from '../../components/RouteSecondList';

const PredictPage = () => {
  const { predictions, dataStructure } = useSelector(
    (state) => state.utils
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [action, setAction] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataStructure());
    dispatch(fetchRoutes(1, 5));
  }, [dispatch]);

  const handleFetchDataStructure = () => {
    dispatch(fetchDataStructure());
  };

  const handleReTrainData = () => {
    dispatch(fetchReTrainData());
  };

  const handleSaveAndTrainDataFile = () => {
    setAction('train');
    setIsModalVisible(true);
  };
  const handlePredictData = () => {
    setAction('predict');
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleCopyStructure = () => {
    navigator.clipboard.writeText(JSON.stringify(dataStructure, null, 2));
  };
  return (
    <Layout_1>
      <div className='p-4'>
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4 text-lime-500'>
          Training values{' '}
          <div className='text-base float-right'>
            <Button
              text='ReTrain Data'
              onClick={handleReTrainData}
              className='mx-2'
            />
            <Button
              text='Save and Train Data File'
              onClick={handleSaveAndTrainDataFile}
              className='mx-2'
            />
          </div>
        </h2>
        <hr className='my-2' />
        <div className='mb-4 p-2 bg-white shadow rounded'>
          <h3 className='text-xl font-semibold mb-2 text-emerald-400'>
            Example of route data
          </h3>
          <div className='overflow-x-auto'>
            <RouteSecondList />
          </div>
        </div>

        <div className='mb-4 p-2 bg-white shadow rounded'>
          <h3 className='text-xl font-semibold mb-2 text-emerald-400'>
            Example of transport data
          </h3>
          <div className='overflow-x-auto'>
            <TransportSecondList />
          </div>
        </div>

        <div className='mb-4 p-4 bg-white shadow rounded'>
          <h3 className='text-xl font-semibold mb-2 text-emerald-400'>
            Predicted Values{' '}
            <div className='text-base float-right'>
              <Button text='Predict Data' onClick={handlePredictData} className='mx-2'/>
            </div>
          </h3>
          <div className='overflow-x-auto'>
            {predictions
              ? predictions.map((item, index) => <div key={index}>{item}</div>)
              : 'No Predictions Available'}
          </div>
        </div>

        <div className='mb-4 p-4 bg-white shadow rounded'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-xl font-semibold text-emerald-400'>
              Data Structure
            </h3>
            <div>
              <Button
                text='Get Data Structure'
                className='mx-2'
                onClick={handleFetchDataStructure}
              />
              <Button
                text='Copy Structure'
                className='mx-2'
                onClick={handleCopyStructure}
              />
            </div>
          </div>
          <div className='overflow-x-auto'>
            {dataStructure ? (
              <pre>{JSON.stringify(dataStructure, null, 2)}</pre>
            ) : (
              'No Data Structure Available'
            )}
          </div>
        </div>

        {isModalVisible && (
          <LoadFileComponent
            isVisible={isModalVisible}
            onClose={closeModal}
            onAct={action}
          />
        )}
      </div>
    </Layout_1>
  );
};

export default PredictPage;
