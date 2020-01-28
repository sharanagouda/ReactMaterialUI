import {
    REQUEST_LOGIN,
    REQUEST_SIGNUP,
    REQUEST_LOGIN_SUCCESSFULL,
    REQUEST_SIGNUP_SUSCESSFULL,
    REQUEST_LOGIN_FAIL,
    REQUEST_SIGNUP_FAIL,
    SET_REDIRECT_URL
   } from "../model";

   const initialState = {
       isLoggedIn: false,
       isLoading: false,
       redirectURL: ''
   }

   export default function login(state = initialState, action){
    switch(action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_SIGNUP:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_LOGIN_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true
            };
        case REQUEST_SIGNUP_SUSCESSFULL:
            return {
                ...state,
                isLoading:false,
                isLoggedIn: true
            };
        case SET_REDIRECT_URL:
            return {
                ...state,
                redirectURL: action.url
            };
        default:
            return state;
    }
}