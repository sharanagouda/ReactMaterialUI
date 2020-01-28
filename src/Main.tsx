import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {AppBar, Toolbar, Typography, Button, IconButton, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Routes from './config/Routes';
// import ReactJS_rxJS_test from "../../RxJS_Test";
// import Login from "../Login";



class Main extends Component{


  componentDidMount() {
    
 }

  render(){

      return (
          <div style={{flex:1, display:"flex"}}>
               <Routes/>
          </div>
       
        );
  }
}

export default  Main;