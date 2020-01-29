import React, { Component,FormEventHandler, KeyboardEventHandler} from 'react';
import {Button, Grid, Paper, Typography, withStyles, Avatar, InputBase} from '@material-ui/core';
import { fade, Theme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import {compose} from "redux";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    overflow: 'hidden',
  },
  paper: {
    textAlign: 'center',
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
          <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
        </Grid>
        
          </div>
        );
}

export default SearchFlight;