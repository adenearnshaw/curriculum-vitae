import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { CareerObjectivesComponent } from './career-objectives/career-objectives.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { HeaderComponent } from './header/header.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        PersonalDetailsComponent,
        CareerObjectivesComponent,
        EmploymentHistoryComponent,
        PortfolioComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
