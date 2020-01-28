import {
    FETCH_USERDATA_PENDING,
    FETCH_USERDATA_SUCCESS,
    FETCH_USERDATA_ERROR,
    FETCH_USER
  } from '../model';
  import {useMemo} from "react";
  import { useDispatch } from "react-redux";
  import { bindActionCreators } from "redux";

  export function useActions(actions: any, deps?: any): any {
    const dispatch = useDispatch();
    return useMemo(
      () => {
      if (Array.isArray(actions)){
          return actions.map(a => bindActionCreators(a, dispatch));
      }
    },
    deps? [dispatch, ...deps] : deps
    );
  }
  
  export function fetchUserDataPending() {
    return {
      type: FETCH_USERDATA_PENDING,
    };
  }
  
  export function fetchUserDataSuccess(products : any) {
    //console.log("hi ",products);
    return {
      type: FETCH_USERDATA_SUCCESS,
      payload: products,
    };
  }
  
  export function fetchUserDataError(error: string) {
    return {
      type: FETCH_USERDATA_ERROR,
      payload: error,
    };
  }

  export function fetchUser(){
    console.log("fetch user ")
    return{
      type: FETCH_USER,

    }
  }