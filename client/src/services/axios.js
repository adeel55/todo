import axios from "axios"
import PNotify from "pnotify/dist/es/PNotify";
import { setToken, getToken } from "../helpers/storage"
import { SERVER_BASE_URL } from "../config/constant"
const api = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: 60000, //1 min
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use((req) => {
  // console.log('Starting Request', JSON.stringify(req, null, 2))
  req.headers.Authorization = "Bearer " + getToken()
  return req

}, err => Promise.reject(err))

api.interceptors.response.use((res) => {
    if(res.data.token){
        setToken(res.data.token)
    }
    if(res.data.message){
      PNotify.success(res.data.message)
    }
    return res.data
}, (err) => {

    console.log(err)
    console.log(err.message)
    PNotify.error(err.message)
    return Promise.reject((err.response && err.response.data) || 'Wrong Services')
})

export default api