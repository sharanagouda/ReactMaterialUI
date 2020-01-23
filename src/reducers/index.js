import {combineReducers} from "redux";
import login from "./loginReducer";
import appReducer from "./app.reducer";
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    app: appReducer,
    login: login
});

export default rootReducer;