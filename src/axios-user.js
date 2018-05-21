import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://xfnecwjtdl.execute-api.us-east-2.amazonaws.com/dev/global?function=signup/'
    // baseURL: 'https://jsonplaceholder.typicode.com/posts/1'
})

export default instance;