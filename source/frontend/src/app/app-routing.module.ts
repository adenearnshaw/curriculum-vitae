import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        enableTracing: false,
    })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
