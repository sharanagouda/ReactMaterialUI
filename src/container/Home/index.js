import React, { Component} from 'react';
import {Button, Grid, Paper, Typography, withStyles, Avatar} from '@material-ui/core';
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchUserData, getUsers } from "../../actionCreators/products.actionCreator";
import { fetchUser } from "../../actions";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor:"lightblue"
  },
});

class Home extends Component{
  
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.handleDefaultNewsRequest();
    this.props.handleUserRequest();
    this.props.handleUserRequestRx();
 }

  render(){
    const {app, classes} =this.props;
    console.log("ds ",app);
      return (
          <div className="App">
            <div className="mainContainer">
              <p></p>
            <Button variant="contained" color="primary">
            Hello Home
          </Button>
              <div className="flex-two">
              {this.props.app.map((item) => (
                  <Paper className={classes.paper} key={item.id} >
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>W</Avatar>
                    </Grid>
                    <Grid item sm={12}>
                      <Typography>{item.title}</Typography>
                      <Typography>{item.body}</Typography>
                    </Grid>
                    </Grid>
                  </Paper>
              ))}
              </div>
            </div>
          </div>
        );
  }
}

const mapStateToProps = (state)=> ({
  app:state.app.products,
})
const mapDispatchToProps =(dispatch)=>({
  handleDefaultNewsRequest : () => dispatch(fetchUserData()),
  handleUserRequest : () => dispatch(getUsers()),
  handleUserRequestRx : () => dispatch(fetchUser())
}) 
export default  compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps)) (Home);