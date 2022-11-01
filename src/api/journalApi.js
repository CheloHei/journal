import axios from 'axios'


const jorunalApp = axios.create({
    baseURL: 'https://vue-demos-1ed5b-default-rtdb.firebaseio.com/'
})

jorunalApp.interceptors.request.use(config => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }
    return config;
})

export default jorunalApp