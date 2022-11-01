import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyD1VdH1mRjhJHQZGvelb322mhUrkm0X0lk',

    }
})


export default authApi