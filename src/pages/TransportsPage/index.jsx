import { useDispatch } from 'react-redux';
import Layout_1 from '../../layouts/Layout1';

import {
  fetchTransports
} from '../../store/actions/transports';
import { useEffect } from 'react';
import TransportList from '../../components/TransportList';
const TransportsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransports());
  }, [dispatch]);
  return (
    <Layout_1>
      <TransportList/>
    </Layout_1>
  );
};
export default TransportsPage;
