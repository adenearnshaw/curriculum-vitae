import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, first, filter } from 'rxjs/operators';

import { DataService } from '../../core/data.service';
import { IProjectItem } from '../../core/models/project-item';

@Component({
    selector: 'cv-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    public project: IProjectItem;

    public constructor(private _dataService: DataService,
                       private _route: ActivatedRoute) { }

    public ngOnInit() {
        this._route.paramMap.subscribe(params => {
            this.project = null;

            const projectId = params.get('projectId');
            this._dataService.projectItems
                .subscribe(projects => {
                    this.project = projects.find(p => p.id === projectId);
                });
        });
    }

}
