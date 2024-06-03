import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTransportDetails } from "../../store/actions/transports";
import Layout_1 from "../../layouts/Layout1";
import RouteItem from "./RouteItem";

const TransportPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.transports);

  useEffect(() => {
    dispatch(fetchTransportDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.transport) {
    return <div>No transport data available</div>;
  }

  const { transport, routes } = data;

  return (
    <Layout_1>
      <div className="p-2">
      <hr className="my-2" />
      <h2 className="text-2xl font-bold text-green-400 text-center">{transport.name} </h2>
      <hr className="my-2" />
        <div className="bg-white shadow-md rounded-lg p-2 m-2 text-center">

          <hr className="my-2" />
          <div className="grid grid-cols-2">
          
          <p><strong>Vehicle Type:</strong> {transport.vehicle_type}</p>
          <p><strong>Fuel Consumption:</strong> {transport.fuel_consumption} L/100km</p>
          <p><strong>Fuel Type:</strong> {transport.fuel_type}</p>
          <p><strong>Company Tax:</strong> {transport.company_tax}</p>
          <p><strong>Capacity:</strong> {transport.capacity}</p>
          <p><strong>Maintenance Cost:</strong> {transport.maintenance_cost}</p>
          </div>
          <hr className="my-2" />
        </div>
        <hr className="my-2" />
        <h2 className="text-2xl font-bold my-4 text-emerald-300 text-center">Transport Routes</h2>
        <hr className="my-2" />
        <div className="grid grid-cols-7 gap-4 bg-green-800 py-4 px-4 rounded-t-lg text-white">
          <div className="font-bold">Route ID</div>
          <div className="font-bold">Date</div>
          <div className="font-bold">Start Location</div>
          <div className="font-bold">End Location</div>
          <div className="font-bold">Start Time</div>
          <div className="font-bold">End Time</div>
          <div className="font-bold">Fare Amount</div>
        </div>
        {routes && routes.length > 0 ? (
          routes.map((route) => (
            <RouteItem key={route.route_id} route={route} />
          ))
        ) : (
          <div>No routes available</div>
        )}
      </div>
    </Layout_1>
  );
};

export default TransportPage;
