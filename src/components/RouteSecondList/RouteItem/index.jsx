
const RouteItem = ({ route }) => {
  const {route_id,transport_id,date,start_location,end_location,start_time,end_time,fare_amount,fare_amount_curency}= route
  return (
    <div className="grid grid-cols-8 gap-4 py-2 px-4 border-b">
      <div>{route_id}</div>
      
      <div>{date}</div>
      <div>{start_location}</div>
      <div>{end_location}</div>
      <div>{start_time}</div>
      <div>{end_time}</div>
      <div>
      {fare_amount_curency}{fare_amount}
      </div>
      <div>{transport_id}</div>
    </div>
  );
};

export default RouteItem ;
