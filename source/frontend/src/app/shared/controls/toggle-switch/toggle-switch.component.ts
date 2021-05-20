import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cv-toggle-switch',
    templateUrl: './toggle-switch.component.html',
    styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
    @Input() public isChecked: boolean;
    @Output() public isCheckedChange = new EventEmitter<boolean>();

    public onChange() {
        this.isChecked = !this.isChecked;
        this.isCheckedChange.emit(this.isChecked);
    }
}
