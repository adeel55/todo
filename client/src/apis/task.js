import api from '../services/axios'

export async function getAll(){
    return await api.get(`api/v1/tasks`)
}

export async function get(id){
    return await api.get(`api/v1/task/${id}`)
}

export async function edit(id){
    return await api.put(`api/v1/task/${id}/edit`)
}

export async function update(id){
    return await api.put(`api/v1/task/${id}`)
}

export async function remove(id){
    return await api.delete(`api/v1/task/${id}`)
}