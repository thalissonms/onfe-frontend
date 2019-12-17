import axios from 'axios'

const api = axios.create({
    baseURL: 'https://onfe-backend.herokuapp.com'/*'http://192.168.15.10:3333'*/
})

export default api
