import React, { Component} from 'react';
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
//Import components 

import {InputText} from "../../components"
import ReactJS_rxJS_test from "../../RxJS_Test";
import Login from "../Login";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


class MainHome extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    }
    
  }

  componentDidMount() {
 }

  render(){
    const {app} =this.props;

      return (
          <div className="App">
           <ReactJS_rxJS_test/>
          </div>
        );
  }
}

const mapStateToProps = (state)=> ({
})
const mapDispatchToProps =(dispatch)=>({
}) 
export default connect(mapStateToProps,mapDispatchToProps)(MainHome);