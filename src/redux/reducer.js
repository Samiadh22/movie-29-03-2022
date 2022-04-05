import {ADD_MOVIE} from './action-type'
import Movies from '../components/Data'
const initalState = {
    Movie : Movies
}
export const movieReducer =(state=initalState, action)=> {
    switch (action.type) {
        case ADD_MOVIE: return {
            ...state,
            Movie : action.payload
        }
        default: return state    
    }

}