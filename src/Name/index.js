import React, { Component } from 'react'
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';


 class NameComponent extends Component {

    handleChange = (event)=>{
        console.log(event.target.value);
    
        this.props.changeName(event.target.value);
    };

  
    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField 
                    id="standard-basic"
                    label="Name"
                    value = {this.props.name}
                    onChange = {(event)=>this.handleChange(event)}
                      />
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        name : state.nameReducer.name
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeName : (name)=>{
            dispatch ({type:"UPDATE",payload:name})
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (NameComponent);
