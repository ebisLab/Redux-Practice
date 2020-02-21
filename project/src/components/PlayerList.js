import React from 'react';
import Card from './Card';
import {connect} from 'react-redux' //connects react to redux



const PlayerList = (props) =>{
    return (<div>
       <h1>Inside PlayerList</h1>
       <Card />
    </div>)
}


const mapStateToProps = (state) =>{
   return{
       state: state.state,
       isFetching: state.isFetching,
       errors: state.errors
} 
}
export default connect(mapStateToProps, {})(PlayerList);