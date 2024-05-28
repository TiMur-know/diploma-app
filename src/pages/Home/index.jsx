import { useDispatch } from 'react-redux';
import Button from '../../components/UI/Button';
import Layout_1 from '../../layouts/Layout1';
import { addRoute, deleteRoute, fetchRoutesPasang, updateRoute } from '../../store/actions/routes';

import { useEffect } from 'react';
import RouteList from '../../components/RouteList';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoutesPasang());
  }, [dispatch]);
  return (
    <Layout_1>
      <div>
          <RouteList/>
          
        <Button text='Save and Train Data File' onClick={dispatch(fetch)} />
				<Button text='Get Data Structure' onClick={dispatch(fetch)} />
        <Button text='Predict Data' onClick={dispatch(fetch)} />


        <Button text='Add Route' onClick={dispatch(addRoute)} />
        <Button text='Update Route' onClick={dispatch(updateRoute)} />
        <Button text='Delete Route' onClick={dispatch(deleteRoute)} />

      </div>
			<div>

			</div>
    </Layout_1>
  );
};
export default Home;
