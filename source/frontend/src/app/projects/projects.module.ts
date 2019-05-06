import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListPreviewComponent } from './project-list-preview/project-list-preview.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'projects',
                component: ProjectListComponent,
            },
            {
                path: 'projects:projectId',
                component: ProjectDetailComponent,
            },
        ]),
    ],
    declarations: [
        ProjectDetailComponent,
        ProjectListPreviewComponent,
        ProjectListComponent,
    ],
    exports: [
        ProjectListPreviewComponent,
    ]
})
export class ProjectsModule { }
