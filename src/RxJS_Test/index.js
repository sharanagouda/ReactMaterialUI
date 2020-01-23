import React,{ useEffect } from "react";

import axios from "axios";
import axiosCancel from "axios-cancel";
import { range, Observable, formEvent, Subscriber, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { from, just, fromPromise, combine, of, mergeArray, observe } from 'most';
import logger from 'logger';

axiosCancel(axios);

const simpleObserver = () => {
    let observable$ = Observable.create((observer) => {
        //internal interaction with observable

        observer.next(1);
        observer.next(2);
        observer.next(3);

        //==> observer.error('error-message');
    //==> observer.complete();
    });
    let observer = {
        next: data => console.log('[data] => ', data),
        complete: data => console.log('[complete]'),
    };
    let subscription = observable$.subscribe(observer); //outside interaction with observable
    subscription.next(4);
    subscription.next(5);
    subscription.complete();
}


const axiosObserver = () => {
    let observable$ = Observable.create((observer) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            observer.next(response.data);
            observer.complete();
        })
        .catch((error) => {
            observer.error(error);
        });
    });

    let subscription = observable$.subscribe({
        next:data => console.log('[data] =>', data),
        complete: data => console.log('[complete]')
    })
    subscription.next(4)
}

class AxiosSubscriber extends Subscriber{
constructor(observer){
    super(observer)
    //create a sample requestId
    this.requestedId = Math.random() + '-xhr-id';

    //XHR abort pointer
    this.aborted = false;
    console.log(this.aborted);
    

    //
    axios.get('https://jsonplaceholder.typicode.com/users', {requestedId : this.requestedId})
    .then((response) => {
        observer.next(response.data);
        observer.complete(); 
    })
    .catch((error) => {
        observer.error(error);
    });
}

unsubscribe(){
    //cancel XHR
    if( this.aborted === false){
        axios.Cancel(this.requestedId);
        this.aborted = true;
        console.log(this.aborted);
      }
    }
}

let observable$ = new Observable((observer) => {
    return new AxiosSubscriber(observer);
});

const Test =() => {
    useEffect(() => {
        fromEvent(document.getElementById('typehead-input'), 'input').pipe(
            switchMap(() => observable$)
        ).subscribe(console.log);
    });
    return(<input type="input" id="typehead-input" placeholder="input field"/>)
}

function ReactJS_rxJS_test(){
console.log("sdhi");
    return(
        <div>
            <p>test</p>
            {simpleObserver()}
            {axiosObserver()}
            {Test()}
        </div>
    )
}
export default ReactJS_rxJS_test;
