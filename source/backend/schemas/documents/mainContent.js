export default {
    name: 'mainContent',
    title: 'Main Content',
    type: 'document',
    fields: [
        {
            name: 'contact_details',
            title: 'Contact Details',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'contactDetail' } }]
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'projectDetail' } }]
        },
        {
            name: 'career_objectives',
            title: 'Career Objectives',
            type: 'content'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'interests',
            title: 'Interests',
            type: 'text'
        }
    ]
}