import {combineReducers} from "redux";
import login from "./loginReducer";
import appReducer from "./app.reducer";
import {reducer as formReducer} from 'redux-form';
import {History} from "history";
import { Todo } from "../model";
import * as todoReducer from "./todo.reducer";

export interface RootState {
    todoList: Todo[];
}

export default (history : History ) => 
combineReducers({
    form: formReducer,
    app: appReducer,
    login: login,
    ...todoReducer
});
