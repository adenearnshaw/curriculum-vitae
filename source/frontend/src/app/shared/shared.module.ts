import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouteTransformerDirective } from './directives/route-transformer.directive';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './pipes/safe.pipe';
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
        SafePipe,
        RouteTransformerDirective,
    ],
    exports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        NotFoundComponent,
        ProjectListPreviewComponent,
        SafePipe,
        RouteTransformerDirective,
    ],
})
export class SharedModule { }
