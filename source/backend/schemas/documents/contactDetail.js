export default {
    name: 'contactDetail',
    title: 'Contact Detail',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string'
        },
        {
            name: 'href',
            title: 'Href',
            type: 'string'
        },
        {
            name: 'is_hidden',
            title: 'Is Hidden',
            type: 'boolean'
        },
        {
            name: 'is_omitted_in_print',
            title: 'Is Omitted In Print',
            type: 'boolean'
        }
    ],
    initialValue: {
        is_hidden: false,
        is_omitted_in_print: false
    }
}