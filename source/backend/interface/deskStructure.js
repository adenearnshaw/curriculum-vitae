import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Site Config")
                .child(
                    S.editor()
                        .id("mainContent")
                        .schemaType("mainContent")
                        .documentId("main-content")
                        .title("Main Content")
                ),
            S.divider(),
            S.listItem()
                .title("Contact Details")
                .child(
                    S.documentTypeList("contactDetail")
                        .title("Contact Details")
                ),
            S.listItem()
                .title("Employment History")
                .child(
                    S.documentTypeList("employmentHistory")
                        .title("Employment History")
                        .defaultOrdering([{ field: 'start_date', direction: 'desc' }])
                ),
            S.listItem()
                .title("Academic Qualifications")
                .child(
                    S.documentTypeList("academicQualification")
                        .title("Academic Qualifications")
                        .defaultOrdering([{ field: 'start_date', direction: 'desc' }])
                ),
            S.listItem()
                .title("Projects")
                .child(
                    S.documentTypeList("projectDetail")
                        .title("Project Details")
                )
        ]);