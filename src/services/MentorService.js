// import ServiceWrapper from '../utils/ServiceWrapper';

const DUMMY_DATA = {
    pageNumber: 1,
    pageSize: 10,
    data: [
        {
            firstName: 'Chad',
            lastName: 'Carpenter',
            company: 'Promethean',
            title: 'Level Two Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Brooks',
            lastName: 'Parrish',
            company: 'Promethean',
            title: 'Level One Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Rolando',
            lastName: 'Santos',
            company: 'Promethean',
            title: 'Backend Guy',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Adam',
            lastName: 'Walker',
            company: 'Advice for Good',
            title: 'The Man',
            categories: [ 'NONPROFIT' ],
        },
        {
            firstName: 'Jeff',
            lastName: 'Hilimire',
            company: 'Dragon Army',
            title: 'CEO',
            categories: [ 'TECH' ],
        },
        {
            firstName: 'Ethan',
            lastName: 'Parrish',
            company: '48in48',
            title: 'Coordinator',
            categories: [ 'NONPROFIT' ],
        },
        {
            firstName: 'Chad',
            lastName: 'Carpenter',
            company: 'Promethean',
            title: 'Level Two Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Brooks',
            lastName: 'Parrish',
            company: 'Promethean',
            title: 'Level One Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Rolando',
            lastName: 'Santos',
            company: 'Promethean',
            title: 'Backend Guy',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Adam',
            lastName: 'Walker',
            company: 'Advice for Good',
            title: 'The Man',
            categories: [ 'NONPROFIT' ],
        },
    ],
}

export default class MentorService {
    getMentorList() {
        return new Promise((resolve, reject) => {
            resolve(DUMMY_DATA);
        });
    }
}
