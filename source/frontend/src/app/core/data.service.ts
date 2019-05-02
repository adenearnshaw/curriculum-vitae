import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IEmploymentItem } from './models/employment-item';
import { IProjectItem } from './models/project-item';

import EmploymentHistoryJson from '../../assets/data/employment-history.json';
import ProjectItems from '../../assets/data/projects.json';

@Injectable()
export class DataService {
    private _projectItems = new BehaviorSubject<IProjectItem[]>(ProjectItems);
    private _employmentHistory = new BehaviorSubject<IEmploymentItem[]>(EmploymentHistoryJson);

    public get projectItems(): Observable<IProjectItem[]> {
        return this._projectItems.asObservable();
    }
    public get employmentHistory(): Observable<IEmploymentItem[]> {
        return this._employmentHistory.asObservable();
    }
}
