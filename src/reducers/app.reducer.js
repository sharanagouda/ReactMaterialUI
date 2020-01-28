import {
    FETCH_USERDATA_PENDING,
    FETCH_USERDATA_SUCCESS,
    FETCH_USERDATA_ERROR
  } from '../model';
  
const initialState = {
    pending: false,
    products: [],
    error: null,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
         case FETCH_USERDATA_PENDING:
            return {
            ...state,
            pending: true,
            };
         case FETCH_USERDATA_SUCCESS:
            return {
            ...state,
            pending: false,
            products: action.payload,
            };
         case FETCH_USERDATA_ERROR:
            return {
            ...state,
            pending: false,
            error: action.error,
            };
         default :
            return state;
    }
}

export default appReducer;