import { Component } from '@angular/core';

@Component({
    selector: 'cv-print-button',
    templateUrl: './print-button.component.html',
    styleUrls: ['./print-button.component.scss'],
})
export class PrintButtonComponent {

    public constructor() { }

    public printWindow(): void {
        if (window) {
            window.print();
        }
    }
}
