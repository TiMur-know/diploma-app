import { useDispatch } from "react-redux";
import { deleteTransport, updateTransport } from "../../../store/actions/transports";
import Button from "../../UI/Button";

const TransportCard=({ transport })=>{
	const {id, name, capacity, fuel_consumption, company_tax, vehicle_type, fuel_type, maintenance_cost } = transport;
	/*const dispatch=useDispatch()*/
	const handleCardClick=()=>{
		console.log(`Transport clicked: ${id}`);
	}
	return(
		<div className="bg-white shadow-md rounded-lg p-4 m-2 transition transform hover:scale-105 cursor-pointer" onClick={handleCardClick}
    >
      <h2 className="text-xl font-bold text-green-400">{name}</h2>
			<hr className=" my-2"/>
      <p ><strong>Vehicle Type:</strong> {vehicle_type}</p>
      <p><strong>Fuel Type:</strong> {fuel_type}</p>
      <p><strong>Capacity:</strong> {capacity}</p>
      <p><strong>Fuel Consumption:</strong> {fuel_consumption} L/100km</p>
      <p><strong>Company Tax:</strong> {company_tax}</p>
      <p><strong>Maintenance Cost:</strong> {maintenance_cost}</p>
			<hr className=" my-2"/>
			{/* 
			<div  className="mt-4 flex space-x-2">
				<Button text='Update' onClick={dispatch(updateTransport)} />
        <Button text='Delete' onClick={dispatch(deleteTransport)} className={'bg-red-500 hover:bg-red-600'}/>
			</div> */}
    </div>
	)
}
export default TransportCard