import ServiceWrapper from '../utils/ServiceWrapper';

export default class MenteeService {
    static users(data, idToModify) {
        // Default to creating a new user
        let type = 'post';
        let url = '/users';

        if (idToModify) {
            // we're modifying an existing user
            type = 'put';
            url = `/users/${idToModify}`;
        }

        return ServiceWrapper[type](url, {
            role: 'MENTEE',
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        })
        .then(resp => resp)
        .catch(err => err);
    }
}
