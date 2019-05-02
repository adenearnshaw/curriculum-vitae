import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AdditionalSkillsComponent } from './additional-skills/additional-skills.component';
import { AppComponent } from './app.component';
import { CareerObjectivesComponent } from './career-objectives/career-objectives.component';
import { EducationHistoryComponent } from './education-history/education-history.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { HeaderComponent } from './header/header.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ProjectsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        PersonalDetailsComponent,
        CareerObjectivesComponent,
        EmploymentHistoryComponent,
        EducationHistoryComponent,
        AdditionalSkillsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
