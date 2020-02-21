import React from 'react';
import {connect} from 'react-redux' //connects react to redux


const Form = (props) =>{
    return (<div>
        <h1>Inside Form</h1>
    </div>)
}

const mapStateToProps = (state) =>{
    return{
        players: state.players
 } 
 }
 export default connect(mapStateToProps, {})(Form);