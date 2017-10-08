import ServiceWrapper from '../utils/ServiceWrapper';

const DUMMY_USER = {
    firstName: 'Brooks',
    lastName: 'Parrish',
    email: 'thisismyemail@thisisntmyemail.com',
    role: 'MENTOR',
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

        return Promise.resolve(DUMMY_USER)
        .then((resp) => {
            localStorage.setItem('token', JSON.stringify('TOP_SECRET'));
            localStorage.setItem('user', JSON.stringify(resp));
            return resp;
        });
    }

    static getUsers() {
        return ServiceWrapper.get('/users')
        .then(resp => resp.data)
        .catch(err => err);
    }

    static logout() {
        // return ServiceWrapper.post('/login', {
        //     email: credentials.email,
        //     password: credentials.password,
        // })
        // .then(resp => resp)
        // .catch(err => err);

        return Promise.resolve()
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        });
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    static isAdmin() {
        const user = UserService.getUser();
        return user && user.role === 'ADMIN';
    }
}
