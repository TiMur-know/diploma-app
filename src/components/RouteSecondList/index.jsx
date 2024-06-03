import { memo } from 'react';
import { useSelector } from 'react-redux';
import RouteItem from './RouteItem';

const RouteSecondList = () => {
  const { routes, error, isLoading } = useSelector((state) => state.routes);
  return (
    <div className=''>

      <div className='grid grid-cols-8 gap-4 bg-green-800 py-2 px-4 rounded-t-lg text-white'>
        <div className='font-bold'>Route ID</div>
        <div className='font-bold'>Date</div>
        <div className='font-bold'>Start Location</div>
        <div className='font-bold'>End Location</div>
        <div className='font-bold'>Departure Time</div>
        <div className='font-bold'>Arrival Time</div>
        <div className='font-bold'>Fare Amount</div>
        <div className='font-bold'>Transport Id</div>
      </div>
      {routes && routes.length > 0 ? (
        <div>
          {routes.map((route) => (
            <RouteItem key={route.route_id} route={route} />
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
export default memo(RouteSecondList);
