import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AdditionalSkillsComponent } from './additional-skills/additional-skills.component';
import { AppComponent } from './app.component';
import { CareerObjectivesComponent } from './career-objectives/career-objectives.component';
import { EducationHistoryComponent } from './education-history/education-history.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    declarations: [
        AppComponent,
        PersonalDetailsComponent,
        CareerObjectivesComponent,
        EmploymentHistoryComponent,
        EducationHistoryComponent,
        AdditionalSkillsComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
