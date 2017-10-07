import ServiceWrapper from '../utils/ServiceWrapper';
import { convertToRaw } from 'draft-js';

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
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Brooks',
            lastName: 'Parrish',
            slug: 'brooks-parrish',
            company: 'Promethean',
            title: 'Level One Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Rolando',
            lastName: 'Santos',
            slug: 'rolando-santos',
            company: 'Promethean',
            title: 'Backend Guy',
            categories: [ 'EDUCATION', 'TECH' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Adam',
            lastName: 'Walker',
            slug: 'adam-walker',
            company: 'Advice for Good',
            title: 'The Man',
            categories: [ 'NONPROFIT' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Jeff',
            lastName: 'Hilimire',
            slug: 'jeff-hilimire',
            company: 'Dragon Army',
            title: 'CEO',
            categories: [ 'TECH' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Ethan',
            lastName: 'Parrish',
            slug: 'ethan-parrish',
            company: '48in48',
            title: 'Coordinator',
            categories: [ 'NONPROFIT' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Chad',
            lastName: 'Carpenter',
            slug: 'chad-carpenter-2',
            company: 'Promethean',
            title: 'Level Two Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Brooks',
            lastName: 'Parrish',
            slug: 'brooks-parrish-2',
            company: 'Promethean',
            title: 'Level One Software Engineer',
            categories: [ 'EDUCATION', 'TECH' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Rolando',
            lastName: 'Santos',
            slug: 'rolando-santos-2',
            company: 'Promethean',
            title: 'Backend Guy',
            categories: [ 'EDUCATION', 'TECH' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
        {
            firstName: 'Adam',
            lastName: 'Walker',
            slug: 'adam-walker-2',
            company: 'Advice for Good',
            title: 'The Man',
            categories: [ 'NONPROFIT' ],
            description: '{"entityMap":{},"blocks":[{"key":"hoim","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum id tortor in ultricies. Ut porttitor felis eget eros bibendum, in laoreet urna varius. Nulla dignissim euismod ullamcorper. Sed lobortis, est quis malesuada efficitur, nisl est congue diam, tincidunt interdum augue risus ut urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis ullamcorper mi, in interdum tellus. Nulla facilisi.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apqdm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3rd5","text":"Maecenas posuere fringilla turpis non tincidunt. Aliquam non fringilla nisi. Donec sed tempus eros, vitae mattis leo. Quisque mattis felis eros, ac fermentum mi sagittis eget. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor pulvinar est, sed iaculis orci efficitur ac. Maecenas auctor porttitor felis, non varius ipsum porttitor vel. Pellentesque tempor augue sit amet velit dignissim, eu auctor urna auctor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
        },
    ],
}

const DUMMY_CATEGORIES = [
    {
        id: 'technology',
        name: 'Technology',
    },
    {
        id: 'startup',
        name: 'Startup',
    },
    {
        id: 'nonprofit',
        name: 'Non-profit',
    },
    {
        id: 'art',
        name: 'Art',
    },
    {
        id: 'personal',
        name: 'Personal Life',
    },
    {
        id: 'career',
        name: 'Career',
    },
];

export default class MentorService {
    static getMentorList() {
        return ServiceWrapper.post('/mentor/list', {
            data: {},
        });
    }

    static getMentorBySlug(slug) {
        return new Promise((resolve, reject) => {
            resolve(DUMMY_DATA.data.filter(mentor => mentor.slug === slug)[0]);
        });
    }

    static createMentor({ firstName, lastName, email, title, company, descriptionEditorState, categories, password }) {
        const descriptionRaw = JSON.stringify(convertToRaw(descriptionEditorState.getCurrentContent()));
        return ServiceWrapper.post('/users', {
            data: {
                type: 'MENTOR',
                firstName,
                lastName,
                email,
                title,
                company,
                categories,
                password,
                description: descriptionRaw,
            },
        })
    }

    static getMentorLink(mentor) {
        return `/mentors/${mentor.slug}`;
    }

    static getMentorCategories() {
        return Promise.resolve(DUMMY_CATEGORIES);
    }

}
