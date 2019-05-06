import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectListPreviewComponent } from './project-list-preview/project-list-preview.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        HeaderComponent,
        NotFoundComponent,
        ProjectListPreviewComponent,
    ],
    exports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        NotFoundComponent,
        ProjectListPreviewComponent,
    ],
})
export class SharedModule { }
