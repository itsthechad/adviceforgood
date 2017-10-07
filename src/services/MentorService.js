// import ServiceWrapper from '../utils/ServiceWrapper';

const DUMMY_DATA = {
    pageNumber: 1,
    pageSize: 10,
    data: [
        {
            firstName: 'Chad',
            lastName: 'Carpenter',
            slug: 'chad-carpenter',
            company: 'Promethean',
            title: 'Level Two Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Brooks',
            lastName: 'Parrish',
            slug: 'brooks-parrish',
            company: 'Promethean',
            title: 'Level One Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Rolando',
            lastName: 'Santos',
            slug: 'rolando-santos',
            company: 'Promethean',
            title: 'Backend Guy',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Adam',
            lastName: 'Walker',
            slug: 'adam-walker',
            company: 'Advice for Good',
            title: 'The Man',
            categories: [ 'NONPROFIT' ],
        },
        {
            firstName: 'Jeff',
            lastName: 'Hilimire',
            slug: 'jeff-hilimire',
            company: 'Dragon Army',
            title: 'CEO',
            categories: [ 'TECH' ],
        },
        {
            firstName: 'Ethan',
            lastName: 'Parrish',
            slug: 'ethan-parrish',
            company: '48in48',
            title: 'Coordinator',
            categories: [ 'NONPROFIT' ],
        },
        {
            firstName: 'Chad',
            lastName: 'Carpenter',
            slug: 'chad-carpenter',
            company: 'Promethean',
            title: 'Level Two Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Brooks',
            lastName: 'Parrish',
            slug: 'brooks-parrish',
            company: 'Promethean',
            title: 'Level One Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Rolando',
            lastName: 'Santos',
            slug: 'rolando-santos',
            company: 'Promethean',
            title: 'Backend Guy',
            categories: [ 'EDUCATION', 'TECH' ],
        },
        {
            firstName: 'Adam',
            lastName: 'Walker',
            slug: 'adam-walker',
            company: 'Advice for Good',
            title: 'The Man',
            categories: [ 'NONPROFIT' ],
        },
    ],
}

export default class MentorService {
    static getMentorList() {
        return new Promise((resolve, reject) => {
            resolve(DUMMY_DATA);
        });
    }

    static getMentorLink(mentor) {
        return `/mentor/${mentor.slug}`;
    }
}
