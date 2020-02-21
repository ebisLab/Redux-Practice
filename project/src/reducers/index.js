
//import action types
import{
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL,
    POST_DATA,
    POST_SUCCESS,
    POST_FAIL
} from '../actions'

const initialState = {
    players: [], //allows us to use methods
    isFetching: false,
    // isPosting: false,
    errors: ''
}

const playerReducer =(state = initialState, action) =>{

    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                players: action.payload,
                isFetching: false,
                errors: ''

            }
        case FETCH_FAIL:
            return{
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case POST_DATA:
            return{
                ...state,
                players: [...state.players],
                isPosting:true,
                errors: ''

            }
        case POST_SUCCESS:
            return{
                ...state,
                players: action.payload,
                isPosting: false
            }
        case POST_FAIL:
            return{
                ...state,
                isPosting: false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default playerReducer;