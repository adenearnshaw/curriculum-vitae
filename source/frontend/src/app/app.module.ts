import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CareerObjectivesComponent } from './career-objectives/career-objectives.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalDetailsComponent,
    CareerObjectivesComponent,
    EmploymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
