import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

import { environment } from 'src/environments/environment';

Sentry.init({
    dsn: environment.sentry_dsn,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    public handleError(error) {
        const eventId = Sentry.captureException(error.originalError || error);
        // Sentry.showReportDialog({ eventId });
        throw error;
    }
}
