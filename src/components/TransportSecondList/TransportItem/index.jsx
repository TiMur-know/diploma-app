
const TransportItem = ({ transport }) => {
  const { id, name, capacity, fuel_consumption, vehicle_type } = transport;
  
  return (
    <div className="grid grid-cols-5 gap-4 py-2 px-4 bg-white border-b border-gray-200">
      <div>{id}</div>
      <div>{name}</div>
      <div>{capacity}</div>
      <div>{fuel_consumption}</div>
      <div>{vehicle_type}</div>
    </div>
  );
};

export default TransportItem;
