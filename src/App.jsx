import { Provider } from 'react-redux';

import store from './store/store';
import Home from './pages/Home';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routings';
const App=()=> {
  
  return (<>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </>);
}

export default App;
