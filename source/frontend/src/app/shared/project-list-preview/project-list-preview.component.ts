import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { IProjectItem } from '../../core/models/project-item';

@Component({
    selector: 'cv-project-list-preview',
    templateUrl: './project-list-preview.component.html',
    styleUrls: ['./project-list-preview.component.scss'],
})
export class ProjectListPreviewComponent implements OnInit {
    public projects: IProjectItem[] = [];

    public constructor(private readonly dataService: DataService) { }

    public ngOnInit() {
        this.dataService.projectItems.subscribe(data => {
            this.projects = data.filter(i => !i.is_hidden)
                                .sort((p1, p2) => p1.order < p2.order ? -1
                                                : p1.order > p2.order ? 1
                                                : 0);
        });
    }
}
