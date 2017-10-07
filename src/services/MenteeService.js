import ServiceWrapper from '../utils/ServiceWrapper';

export default class MenteeService {
    static register(mentee) {
        return ServiceWrapper.post('/users', {
            type: 'MENTEE',
            firstName: mentee.firstName,
            lastName: mentee.lastName,
            email: mentee.email,
            password: mentee.password,
        })
        .then(resp => resp)
        .catch(err => err);
    }
}
