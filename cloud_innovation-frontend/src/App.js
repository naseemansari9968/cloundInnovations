import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainRoutes from './Pages/MainRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
};

export default App;
