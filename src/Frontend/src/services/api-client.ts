import axios, { AxiosRequestConfig } from "axios";
import UserTask from "../models/UserTask";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5280/api',
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config? : AxiosRequestConfig) => {
        return axiosInstance
                .get<UserTask[]>(this.endpoint, config)
                .then(res => res.data)
                .catch(err => err);
    }

    get = (id: number | string, config? : AxiosRequestConfig) => {
        return axiosInstance
                .get<T>(this.endpoint + '/' + id, config)
                .then(res => res.data)
                .catch(err => err);
    }

    create = (data: Partial<T>, config?: AxiosRequestConfig) => {
        return axiosInstance
                .post(this.endpoint, data, config)
                .catch(err => err);
    }

    update = (id: number | string, data: Partial<T>, config?: AxiosRequestConfig) => {
        return axiosInstance
                .put(this.endpoint  + '/' + id, data, config)
                .then(data => data)
                .catch(err => err);
    }

    delete = (id: number | string, config?: AxiosRequestConfig) => {
        return axiosInstance
                .delete(this.endpoint  + '/' + id, config)
                .catch(err => err);

    }
}

export default APIClient