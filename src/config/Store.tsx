import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from "history";
//React thunk
import thunk from 'redux-thunk';
import * as localforage from "localforage";
import { createLogger } from "redux-logger";
import rootReducer from '../reducers';
import { createEpicMiddleware } from "redux-observable";
import epics from "../actionCreators/Epics.actionCreator";

// Chrome Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistConfig, persistReducer, persistStore } from "redux-persist"; 

const persistConfig: PersistConfig<any> = {
	key: "root",
	version: 1,
	storage: localforage,
	blacklist: [],
};

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const logger = (createLogger as any)();
const dev = process.env.NODE_ENV === "development";
let middleware = dev ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);

if (dev) {
	middleware = composeWithDevTools(middleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default () => {
	const store = createStore(persistedReducer, {}, middleware) as any;
	const persistor = persistStore(store);
	return { store, persistor };
};

export { history };