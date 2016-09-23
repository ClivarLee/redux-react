/**
 * Created by lichangjun on 16/9/22.
 */
import {combineReducers} from 'redux'
import * as constants from '../constants'

const {
    ADD_TODO,DELETE_TODO,EDIT_TODO,COMPLETE_TODO,COMPLETE_ALL,CLEAR_COMPLETE
} = constants

const initialState = [{
    text : 'sssds Text',
    completed : false,
    id : 0
}]

export default function todos(state=initialState,action){

    switch (action.type){
        case ADD_TODO:
            state = [...state,{
                        id : state.length,
                        completed : false,
                        text : action.text
                    }]
            return state;
            break;
        case DELETE_TODO:
            state.splice(action.id,1)
            return [...state];
            break;
        default:
            return state;
    }
}