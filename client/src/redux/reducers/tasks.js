import { TASK } from "../actionTypes"

const defaultState = {
    tasks: null
}

const tasksReducer = (state = defaultState, action) => {
    switch(action.type){
        case TASK.GET_ALL_TASKS:
            return {
                    ...state,
                    tasks: action.payload
                }
        case TASK.GET_TASK:
            return state
        case 'DELETE_TASK':
            return state
        case 'UPDATE_TASK':
            return state
        default:
            return defaultState
    }
}
export default tasksReducer