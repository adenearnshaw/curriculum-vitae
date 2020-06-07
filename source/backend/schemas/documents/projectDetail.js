export default {
    name: 'projectDetail',
    title: 'Project Detail',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'short_name',
            title: 'Short Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image'
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'content'
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }]
        },
        
    ]
}