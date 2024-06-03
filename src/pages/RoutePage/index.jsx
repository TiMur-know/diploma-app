import { useDispatch } from 'react-redux';
import Layout_1 from '../../layouts/Layout1';
import { fetchRoutesPasang } from '../../store/actions/routes';

import { useEffect } from 'react';
import RouteList from '../../components/RouteList';
const RoutePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoutesPasang());
  }, [dispatch]);
  return (
    <Layout_1>
      <RouteList/>
    </Layout_1>
  );
};
export default RoutePage;
