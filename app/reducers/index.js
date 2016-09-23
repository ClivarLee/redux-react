/**
 * Created by lichangjun on 16/9/22.
 */
import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
    todos
})

export default rootReducer