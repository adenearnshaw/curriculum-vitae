import { Injectable } from '@angular/core';

import { IEmploymentItem } from './models/employment-item';
import { IProjectItem } from './models/project-item';

import EmploymentHistoryJson from '../../assets/data/employment-history.json';
import ProjectItems from '../../assets/data/projects.json';

@Injectable()
export class DataService {
    public getProjectItems(): IProjectItem[] {
        return ProjectItems as IProjectItem[];
    }

    public getEmploymentHistory(): IEmploymentItem[] {
        return EmploymentHistoryJson as IEmploymentItem[];
    }
}
