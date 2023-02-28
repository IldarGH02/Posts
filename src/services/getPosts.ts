import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getPosts = (): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
    }
    return axios.request(options)
}

export default getPosts