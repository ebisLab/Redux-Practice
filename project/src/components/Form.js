import React, { useState } from 'react';
import {connect} from 'react-redux' //connects react to redux

import {postPlayers} from '../actions'


const Form = (props) =>{

    const [player, setPlayer] = useState({
        name: '',
        rank: '',
        nickname: ''
    })

    const inputHandler = e =>{
        e.preventDefault()
setPlayer({...player, [e.target.name]: e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        props.postPlayers(player) //actions
    }
    return (<div>
        <h1>Inside Form</h1>
        <form id="playerform">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            label="name"
            placeholder="Name" 
            value={props.name}
            onChange={inputHandler}
            className="input"/>

<label htmlFor="rank">Rank</label>
            <input
            type="text"
            name="rank"
            label="rank"
            placeholder="Rank" 
            value={props.rank}
            onChange={inputHandler}
            className="input"/>

<label htmlFor="nickname">Nickname</label>
            <input
            type="text"
            name="nickname"
            label="nickname"
            placeholder="Nickname" 
            value={props.nickname}
            onChange={inputHandler}
            className="input"/>
            <button onClick={submitHandler}>Find</button>
        </form>
    </div>)
}

const mapStateToProps = (state) =>{
    return{
        players: state.players, 
        errors: state.errors
 } 
 }
 export default connect(mapStateToProps, {postPlayers})(Form);