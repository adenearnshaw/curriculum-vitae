import { Component, OnInit } from '@angular/core';
import { EmploymentItem } from './employment-item.model';

@Component({
    selector: 'cv-employment-history',
    templateUrl: './employment-history.component.html',
    styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent implements OnInit {

    public employmentItems: EmploymentItem[] = [];
    
    public constructor() { }

    public ngOnInit() {
        this.employmentItems = [
            <EmploymentItem>{
                date: 'Apr 2017 - Present',
                employer: 'WeBuyAnyCar.com Ltd',
                position: 'Software Developer',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Jan 2017 - Apr 2017',
                employer: 'Democracy Counts Ltd',
                position: 'Mobile Developer',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Jun 2015 - Jan 2017',
                employer: 'Sainsbury\'s Supermarkets Ltd',
                position: 'Software Engineer',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Jul 2013 - Jun 2015',
                employer: 'Verco Advisory Services Ltd',
                position: 'Junior Developer',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Jan 2012 - Jul 2013',
                employer: 'Carphone Warehouse PLC',
                position: 'Customer Service Representative',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Nov 2010 - Jan 2012',
                employer: 'Best Buy UK',
                position: 'Customer Service Advisor',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Jun 2003 - Nov 2010',
                employer: 'Wm Morrisons PLC',
                position: 'Customer Cafe Manager',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Jun 2002 - Nov 2002',
                employer: 'Multimedia Shop',
                position: 'Computer Technician',
                blurb: '',
                skills: []
            },
            <EmploymentItem>{
                date: 'Nov 2001',
                employer: 'British Telecoms',
                position: 'System Programming Assistant',
                blurb: '',
                skills: []
            }
        ]
    }

}
