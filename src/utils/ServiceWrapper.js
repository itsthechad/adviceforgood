import axios from 'axios';
import ENV from './../env.js';

export default class ServiceWrapper {
    static get(url, config) {
        return new Promise((resolve, reject) => {
            axios.get(`${ENV.HOST}${url}`, { ...config })
            .then(resp => {
                resolve(resp);
            })
            .catch(resp => {
                reject(resp);
            })
        });
    }

    static post(url, config) {
        return new Promise((resolve, reject) => {
            axios.post(`${ENV.HOST}${url}`, { ...config })
            .then(resp => {
                resolve(resp);
            })
            .catch(resp => {
                reject(resp);
            })
        });
    }
}
