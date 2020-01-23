import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Button from '@material-ui/core/Button';
import {InputText} from "../../components";


const renderTextField = field => {
  const {
    meta: { touched, error, type },
    lable,
    maxLength,
    placeholder,
    input:{onChange, ...restInput}
    } = field;
    return(
      <div>
          <InputText
            label={lable}
            onChangeText={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            errorText={touched && error}
            type={type}
            {...restInput}
          />
           {touched && error && <p style={{color:"red"}}>"sdfsd"</p>}
      </div>
    )
}

class Login extends Component{

    constructor(props){
      super(props);
      this.state={

      };
    }

    onSubmit = values =>{
      console.log(values);
    }



    render(){
      const {handleSubmit} = this.props;
        return (
            <div className="App">
              <div className="mainContainer">
                <p>sdkfhsd</p>
              <Button variant="contained" color="primary">
              Hello Login
            </Button>
              </div>
              <div>
              
               <Field name="name"  label="Name" component={renderTextField}  type="text"/>
           
              </div>
            </div>
          );
    }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Name is required';
  }
  return errors;
};

const mapStateToProps = state => ({
  // createUser: state.authReducer.createUser
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'register',
    validate,
  }),
)(Login);
