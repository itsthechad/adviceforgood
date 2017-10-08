import { convertToRaw } from 'draft-js';
import ServiceWrapper from '../utils/ServiceWrapper';

export default class MenteeService {

    // This is actually for creating and modifying Mentors and Mentees. Need to move this to a user service or something.
    static users(data, idToModify) {
        // Default to creating a new user
        let type = 'post';
        let url = '/users';

        if (idToModify) {
            // we're modifying an existing user
            type = 'put';
            url = `/users/${idToModify}`;
        }

        let descriptionRaw = '';
        if (data.descriptionEditorState) {
            descriptionRaw = JSON.stringify(convertToRaw(data.descriptionEditorState.getCurrentContent()));
        }

        return ServiceWrapper[type](url, {
            role: 'MENTEE',
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            jobTitle: data.title,
            company: data.company,
            categories: data.categories,
            description: descriptionRaw,
            points: data.points,
        })
        .then(resp => resp)
        .catch(err => err);
    }
}
