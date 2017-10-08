// import ServiceWrapper from '../utils/ServiceWrapper';

const DUMMY_USER = {
    firstName: 'Brooks',
    lastName: 'Parrish',
    email: 'thisismyemail@thisisntmyemail.com',
    role: 'ADMIN',
    id: '1',
};

export default class UserService {
    static login(/* credentials */) {
        // return ServiceWrapper.post('/login', {
        //     email: credentials.email,
        //     password: credentials.password,
        // })
        // .then(resp => resp)
        // .catch(err => err);
        return new Promise((resolve/* , reject */) => {
            localStorage.setItem('token', JSON.stringify('TOP_SECRET'));
            localStorage.setItem('user', JSON.stringify(DUMMY_USER));
            resolve();
        });
    }

    static getUsers() {
        return ServiceWrapper.get('/users')
        .then(resp => resp.data)
        .catch(err => err);
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    static isAdmin() {
        const user = UserService.getUser();
        return user.role === 'ADMIN';
    }
}
