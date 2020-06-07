// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import academicQualification from './documents/academicQualification';
import contactDetail from './documents/contactDetail';
import employmentHistory from './documents/employmentHistory';
import mainContent from './documents/mainContent';
import projectDetail from './documents/projectDetail';

import blockContent from './objects/blockContent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        academicQualification,
        contactDetail,
        employmentHistory,
        mainContent,
        projectDetail,

        blockContent
    ])
})
