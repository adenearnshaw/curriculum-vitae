import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IEmploymentItem } from '../core/models/employment-item';

@Component({
    selector: 'cv-employment-history',
    templateUrl: './employment-history.component.html',
    styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent implements OnInit {

    public employmentItems: IEmploymentItem[] = [];
    public showAllEmployment: boolean = false;

    public constructor(private readonly _dataService: DataService) { }

    public ngOnInit() {
        this._dataService.employmentHistory.subscribe((data) => {
            this.employmentItems = data;
        });
    }
}
