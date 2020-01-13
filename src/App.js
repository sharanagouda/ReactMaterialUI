import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/Store';
import Main from "./Main";

function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}

export default App;
