import React, {useEffect} from 'react';
import Card from './Card';
import {connect} from 'react-redux' //connects react to redux

import {fetchPlayers} from '../actions'



const PlayerList = (props) =>{

    console.log(props)

    useEffect(()=>{
        props.fetchPlayers()
    }, [])

    return (<div>
       <h1>Inside PlayerList</h1>
       <Card />
    </div>)
}


const mapStateToProps = (state) =>{
   return{
    //    state: state.state,
    //    isFetching: state.isFetching,
    players: state.players,
    isFetching: state.isFetching,
       errors: state.errors
} 
}
export default connect(mapStateToProps, {fetchPlayers})(PlayerList);