import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cv-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

    public constructor() { }

    public printWindow(): void {
        if (window) {
            window.print();
        }
    }
}
