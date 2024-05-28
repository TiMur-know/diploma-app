import {useSelector} from "react-redux"
const useFetchRoutes = () => {

  const routes = useSelector((store) => store.routes.routes);
  const error = useSelector((store) => store.routes.error);
  const isLoading = useSelector((store) => store.routes.isLoading);

  return {routes, error, isLoading}
}

export default useFetchRoutes;