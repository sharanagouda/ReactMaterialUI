import 'rxjs';
import { combineEpics } from "redux-observable";
import { fetchUserDataSuccess, fetchUserDataPending } from "../actions";
import { ajax } from "rxjs/ajax";
import { Observable } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { FETCH_USERDATA_SUCCESS } from "../model";

export const fetchUser = (action$) => {
    return action$.ofType(FETCH_USERDATA_SUCCESS).pipe(
        switchMap(() => {
            return ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
                map(user => {
                    fetchUserDataSuccess(user)
                }),
                catchError(error => Observable.of(fetchUserDataPending()))
            )
        })
    );
}

export default combineEpics(
    fetchUser
)

