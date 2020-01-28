import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {InputText} from "../../components"
import {AppBar, Toolbar, Typography, Button, IconButton, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import ReactJS_rxJS_test from "../../RxJS_Test";
// import Login from "../Login";
import SearchFlight from "../SearchFlight";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});


class MainHome extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    }
    
  }

  componentDidMount() {
    
 }

  render(){
    const {classes} =this.props;

      return (
          <div className={classes.root}>
           <SearchFlight/>
          </div>
        );
  }
}

const mapStateToProps = (state)=> ({
})
const mapDispatchToProps =(dispatch)=>({
}) 
export default  compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps)) (MainHome);