import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";


const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string,
    type:PropTypes.string
}

const defaultProps = {
    mapElement: n => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: '',
    placeholder: '',
    maxLength: 200,
    keyboardType: 'default',
    secureTextEntry: false,
    label: '',
    type:'text'
}

const styles = theme => ({
    inputField:{
        width: 300,
    }
});

class InputText extends Component {

    state= {
        value:'',
    }

    componentDidMount(){
        this.setState({
            value:this.props.value,
        })
    }

    onChangeText = value =>{
        this.setState({
            value,
        },()=> {
            this.props.onChangeText(value);
        })
    }

    render(){
        const {placeholder,label,classes, secureTextEntry, keyboardType,maxLength,onChangeText,value,onSubmitEditing} = this.props;
        return(
            <div>
                <input 
                    className={classes.inputField}
                    variant="outlined"
                    margin="normal"
                    required
                    id="email"
                    label={label}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type="text"
                    onSubmitEditing={onSubmitEditing}
                    onChange={this.onChangeText}
                />
            </div>
        )
    }
}

InputText.defaultProps = defaultProps;
InputText.propTypes = propTypes;

export default withStyles(styles)(InputText);
