import React from 'react';


const Card = props =>{
    return (<>
 <div className="card">
     <h2>{props.player.name}</h2>
     <h3>{props.player.rank}</h3>
     <h3>{props.player.nickname}</h3>
     <button>REMOVE</button>
 </div>
    </>)
}

export default Card;