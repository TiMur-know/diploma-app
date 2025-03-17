/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransports } from '../../store/actions/transports';
import TransportItem from './TransportItem';

const TransportList = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.transports);

  useEffect(() => {
    dispatch(fetchTransports(1, 10));
  }, [dispatch]);

  return (
    <div className=''>
      <div className='grid grid-cols-5 bg-green-800 py-4 px-4 rounded-t-lg text-white'>
        <div className='font-bold'>Transport ID</div>
        <div className='font-bold'>Name</div>
        <div className='font-bold'>Capacity</div>
        <div className='font-bold'>Fuel Consumption</div>
        <div className='font-bold'>Vehicle Type</div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : data && data.length > 0 ? (
        <div>
          {data.map((transport) => (
            <TransportItem key={transport.id} transport={transport} />
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default memo(TransportList);
