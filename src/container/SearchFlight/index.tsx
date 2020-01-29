import React, { Component,FormEventHandler, KeyboardEventHandler} from 'react';
import {Button, Grid, Paper, Typography, withStyles, Avatar, InputBase} from '@material-ui/core';
import { fade, Theme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import {compose} from "redux";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  search: {
    display:"flex",
    position: 'relative',
    border: "2px solid red",
    borderRadius: 4,
    width: '15%',
  },
  searchIcon: {
    display:'flex',
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
    width: '100%',
    backgroundColor:"lightblue"
}
}));




function SearchFlight(){
  const classes = useStyles();

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

export default SearchFlight;