import React from 'react';
import { Provider } from 'react-redux';
import { Typography } from "@material-ui/core";
import Main from "./Main";
import { createEpicMiddleware } from "redux-observable";
import epics from "./actionCreators/Epics.actionCreator";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./config/Store";
import SearchFlight from './container/SearchFlight';

const epicMiddleware = createEpicMiddleware();
const { persistor, store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      {epicMiddleware.run(epics)}
      <PersistGate
				loading={<Typography>Loading...</Typography>}
				persistor={persistor}
			>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
