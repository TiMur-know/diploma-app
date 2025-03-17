/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTransports } from '../../store/actions/transports';
import TransportCard from './TransportCard';


const TransportList = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.transports);
  console.log(useSelector((state) => state));
  console.log(data);
  useEffect(() => {
    dispatch(fetchTransports());
  }, [dispatch]);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-lime-500'>Transports</h1>
        {/* <Button text='Add Transport' onClick={dispatch(addTransport)} />*/}
      </div>
      <hr className=' my-2' />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {data && data.length > 0 ? (
          data.map((transport) => (
            <TransportCard key={transport.id} transport={transport} />
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default memo(TransportList);
