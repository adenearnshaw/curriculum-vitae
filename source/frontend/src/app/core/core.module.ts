import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';

import { DataService } from './data.service';
import { SentryErrorHandler } from './sentry.error-handler';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        DataService,
        { provide: ErrorHandler, useClass: SentryErrorHandler},
    ],
})
export class CoreModule { }
