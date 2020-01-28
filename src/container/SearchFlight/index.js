import React, { Component,FormEventHandler, KeyboardEventHandler} from 'react';
import {Button, Grid, Paper, Typography, withStyles, Avatar, InputBase} from '@material-ui/core';
import { fade, Theme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import {compose} from "redux";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  search: {
    display:"flex",
    position: 'relative',
    border: "2px solid red",
    borderRadius: 4,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    display:'flex',
    width: theme.spacing(5),
    top:5,
    height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    padding: theme.spacing(1, 7, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
    backgroundColor:"lightblue"
}
});




class SearchFlight extends Component{

  
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
              <br/>
            <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          </div>
        );
  }
}

const mapStateToProps = (state)=> ({
})
const mapDispatchToProps =(dispatch)=>({
}) 
export default  compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps)) (SearchFlight);