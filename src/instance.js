import axios from "axios";

const instance = axios.create({
    baseURL: 'http://15.207.66.20/api/'
})

instance.interceptors.request.use(
    config => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVjNmNhYzNkNDZhNjMwODgzMTY2YTIiLCJleHBpcmVzSW4iOiIzZCIsImlhdCI6MTYzMzQ0ODM1NX0.MQJc3KpwEK_ctXawr9t3Z7JXxuItvktc-v_aYrW1kmk`
    return config
    },
    error => {
    return Promise.reject(error)
    }
)

export { instance }