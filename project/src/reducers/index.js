
const initialState = {
    players: [], //allows us to use methods
    isFetching: false,
    isPosting: false,
    errors: ''
}

const playerReducer =(state = initialState, action) =>{

    switch(action.type){
        default:
            return state
    }
}

export default playerReducer;