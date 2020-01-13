import {
    FETCH_USERDATA_PENDING,
    FETCH_USERDATA_SUCCESS,
    FETCH_USERDATA_ERROR
  } from '../actionTypes';
  
  export function fetchUserDataPending() {
    return {
      type: FETCH_USERDATA_PENDING,
    };
  }
  
  export function fetchUserDataSuccess(products) {
    //console.log("hi ",products);
    return {
      type: FETCH_USERDATA_SUCCESS,
      payload: products,
    };
  }
  
  export function fetchUserDataError(error) {
    return {
      type: FETCH_USERDATA_ERROR,
      error: error,
    };
  }