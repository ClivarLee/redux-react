/**
 * Created by lichangjun on 16/9/22.
 */
import * as types from '../constants'

export function addTodo(text){
    return {type:types.ADD_TODO,text}
}

export function editTodo(text){
    return {type:types.EDIT_TODO,text}
}

export function deleteTodo(id){
    return {type:types.DELETE_TODO,id}
}