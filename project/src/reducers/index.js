
const initialState = {
    players: [], //allows us to use methods
    isFetching: false,
    error: ''
}

const playerReducer =(state = initialState, action) =>{

    switch(action.type){
        default:
            return state
    }
}

export default playerReducer;