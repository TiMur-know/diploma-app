import {useSelector} from "react-redux"
const useFetchTransports = () => {

  const transports = useSelector((store) => store.transports.transports);
  const error = useSelector((store) => store.transports.error);
  const isLoading = useSelector((store) => store.transports.isLoading);

  return {transports, error, isLoading}
}

export default useFetchTransports;