import { USER } from "../actionTypes"

const defaultState = {
    users: []
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case USER.GET_ALL_USERS:
            return {
                    ...state,
                    users: action.payload
                }
        case USER.GET_USER:
            return state
        case 'DELETE_USER':
            return state
        case 'UPDATE_USER':
            return state
        default:
            return state;
    }
}

export default userReducer