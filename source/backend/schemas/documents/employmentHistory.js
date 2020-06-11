export default {
    name: 'employmentHistory',
    title: 'Employment History',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string'
        },
        {
            name: 'employer',
            title: 'Employer',
            type: 'string'
        },
        {
            name: 'brandColor',
            title: 'Brand Color',
            type: 'color'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'start_date',
            title: 'Start Date',
            type: 'date'
        },
        {
            name: 'end_date',
            title: 'End Date',
            type: 'date'
        },        
        {
            name: 'overview',
            title: 'Overview',
            type: 'text'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'content'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'is_omitted_in_print',
            title: 'Is Omitted In Print',
            type: 'boolean'
        }
    ],
    initialValue: {
        is_omitted_in_print: false
    },
    preview: {
        select: {
            title: 'employer'
        }
    }
}