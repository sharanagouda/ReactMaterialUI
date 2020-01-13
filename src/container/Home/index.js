import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {fetchUserData } from "../../actionCreators/products.actionCreator";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


class Home extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    }
    
  }

  componentDidMount() {
    this.props.handleDefaultNewsRequest();
 }

  render(){
    const {app} =this.props;

    console.log("ds ",app);

      return (
          <div className="App">
            <div className="mainContainer">
              <p>sdkfhsd</p>
            <Button variant="contained" color="primary">
            Hello Home
          </Button>
              <div className="flex-two">
              {this.props.app.map((item) => (
                     <List component="nav" key={item.id} aria-label="main mailbox folders" style={{ display:"flex",flex:1, flexDirection:"row"}}>
                          <ListItemAvatar>
                              <Avatar>
                                <BeachAccessIcon />
                              </Avatar>
                            </ListItemAvatar>
                           <ListItemText primary={item.title} secondary={item.body} />
                     </List>
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
  handleDefaultNewsRequest : () => dispatch(fetchUserData())
}) 
export default connect(mapStateToProps,mapDispatchToProps)(Home);