import {combineReducers} from "redux";
import login from "./loginReducer";
import appReducer from "./app.reducer";


const rootReducer = combineReducers({
    app: appReducer,
    login: login
});

export default rootReducer;