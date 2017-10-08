import ServiceWrapper from '../utils/ServiceWrapper';

const DUMMY_USER = {
    firstName: 'Brooks',
    lastName: 'Parrish',
    email: 'thisismyemail@thisisntmyemail.com',
    role: 'ADMIN',
}

export default class UserService {
    static login(credentials) {
        // return ServiceWrapper.post('/login', {
        //     email: credentials.email,
        //     password: credentials.password,
        // })
        // .then(resp => resp)
        // .catch(err => err);
        return new Promise((resolve, reject) => {
            localStorage.setItem('token', JSON.stringify('TOP_SECRET'));
            localStorage.setItem('user', JSON.stringify(DUMMY_USER));
            resolve();
        });
    }

    static getUser() {
        return localStorage.getItem('user');
    }
}
