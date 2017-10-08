import ServiceWrapper from '../utils/ServiceWrapper';

export default class UserService {
    static login(credentials) {
        return ServiceWrapper.post('/login', {
            email: credentials.email,
            password: credentials.password,
        })
        .then(resp => resp)
        .catch(err => err);
    }
}
