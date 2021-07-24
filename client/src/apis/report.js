import api from '../services/axios'

export async function totalTasks(){
    return await api.get(`api/v1/report/totalTasks`)
}

export async function averageCompletedTasksPerDay(){
    return await api.get(`api/v1/report/averageCompletedTasksPerDay`)
}

export async function overDueTasks(){
    return await api.get(`api/v1/report/overDueTasks`)
}

export async function maxTasksCompletionDay(){
    return await api.get(`api/v1/report/maxTasksCompletionDay`)
}

export async function tasksOpenInDayOfWeek(){
    return await api.get(`api/v1/report/tasksOpenInDayOfWeek`)
}

