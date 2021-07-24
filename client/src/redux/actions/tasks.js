import { TASK } from "../actionTypes"
import * as api from '../../apis/task'

export function getTasks() {

    return async (dispatch) => {
        try {
            const { data } = await api.getTasks()
            console.log(data)
            dispatch({
                type: TASK.GET_ALL_TASKS,
                payload: data
            })
        } catch(err) {
            console.log(err)
        }
    }
}
export function getTask (id) {
    
    return  async (dispatch) => {
        try {
            const { data } = await api.getTask(id)
            console.log(data)
            dispatch({
                type: TASK.GET_TASK,
                payload: data
            })
        } catch(err) {
            console.log(err)
        }
    }
}
