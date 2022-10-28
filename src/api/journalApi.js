import axios from 'axios'


const jorunalApp = axios.create({
    baseURL: 'https://vue-demos-1ed5b-default-rtdb.firebaseio.com/'
})


export default jorunalApp