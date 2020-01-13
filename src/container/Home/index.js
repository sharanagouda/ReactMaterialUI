import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {fetchUserData } from "../../actionCreators/products.actionCreator";

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