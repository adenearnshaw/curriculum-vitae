import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProjectListComponent,
            },
            {
                path: ':projectId',
                component: ProjectDetailComponent,
            },
        ]),
    ],
    declarations: [
        ProjectDetailComponent,
        ProjectListComponent,
    ],
    exports: [
        RouterModule,
    ]
})
export class ProjectsModule { }
