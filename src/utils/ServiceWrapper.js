import axios from 'axios';

export default class ServiceWrapper {
    static get(url, config) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.REACT_APP_DEV_ENV || process.env.REACT_APP_PROD_ENV}${url}`, { ...config })
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
            axios.post(`${process.env.REACT_APP_DEV_ENV || process.env.REACT_APP_PROD_ENV}${url}`, { ...config })
            .then(resp => {
                resolve(resp.data);
            })
            .catch(resp => {
                reject(resp);
            })
        });
    }
}
