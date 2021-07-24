import api from '../services/axios'

export async function similarTasks(){
    return await api.get(`api/v1/similar-tasks`)
}
