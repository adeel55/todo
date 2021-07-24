import { combineReducers } from 'redux'
import tasksReducer from './tasks'
import userReducer from './users'


export default combineReducers({
    tasks: tasksReducer,
    users: userReducer

})