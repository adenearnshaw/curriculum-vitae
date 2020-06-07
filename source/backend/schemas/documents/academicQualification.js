export default {
    name: 'academicQualification',
    title: 'Academic Qualification',
    type: 'document',
    fields: [
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
            name: 'institution',
            title: 'Institution',
            type: 'string'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'text'
        }
        
    ]
}