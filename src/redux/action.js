import {ADD_MOVIE} from './action-type'

export const addMovie = (data) => {
    return {
        type : ADD_MOVIE,
        payload: data
    }

}