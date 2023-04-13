import axios from 'axios'

export const authAPI = axios.create({baseURL:'http://localhost:5000'})

authAPI.interceptors.request.use((req)=>{
    req.headers.authorization = localStorage.getItem('eLearningUserToken');
    return req
})