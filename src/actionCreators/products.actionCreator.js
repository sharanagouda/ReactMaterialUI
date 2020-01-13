import {
    fetchUserDataPending,
    fetchUserDataError,
    fetchUserDataSuccess
  } from '../actions';
  
const error = "please try again"

  export function fetchUserData(dispatch) {
    console.log('sdjfhsd');
    return dispatch => {
      dispatch(fetchUserDataPending());
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
          //console.log('sd ', res);
          if (res.error) {
            throw res.error;
          }
          dispatch(fetchUserDataSuccess(res));
          return res;
        })
        .catch(error => {
          dispatch(fetchUserDataError(error));
        });
    };
  }

  export function fetchUserData3() {
    return async dispatch => {
      try {
        const users = await fetch(`https://api.openbrewerydb.org/breweries`, {
          method: 'GET',
        });
        const data = await users.json();
        dispatch(fetchUserDataSuccess(data));
      } catch (err) {
        dispatch(fetchUserDataError(error));
      }
    };
  }
