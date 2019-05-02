import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListPreviewComponent } from './project-list-preview/project-list-preview.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectListPreviewComponent, ProjectListComponent, ProjectDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
