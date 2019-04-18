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
                id: 'wbac',
                date: 'Apr 2017 - Present',
                employer: 'WeBuyAnyCar.com Ltd',
                position: 'Software Developer',
                overview: 'Initially hired to for my expertise in mobile development, I helped the company migrate their public facing mobile app from a Cordova based product to Xamarin Forms. I was responsible for architecting the app’s structure and providing the team and stakeholders with valuable insight surrounding Mobile Design Best Practice.', 
                details: 'Initially hired to for my expertise in mobile development, I helped the company migrate their public facing mobile app from a Cordova based product to Xamarin Forms. I was responsible for architecting the app’s structure and providing the team and stakeholders with valuable insight surrounding Mobile Design Best Practice.\r\n\r\nFollowing on from the conclusion of this project, my work has focussed on redevelopment of the public website and its accompanying back end systems. Moving the website to an Angular front-end and completelty overhauling the UI.',
                skills: [
                    'Xamarin Forms 3.5',
                    'Azure Devops',
                    'Octopus Deploy',
                    'VS App Center & TestFlight',
                    'ASP.NET Core',
                    'Angular (v2 & above)',
                    'Sass'
                ]
            },
            <EmploymentItem>{
                id: 'dcl',
                date: 'Jan 2017 - Apr 2017',
                employer: 'Democracy Counts Ltd',
                position: 'Mobile Developer',
                overview: 'As the only mobile developer employed by the company, it was my responsibility to design and build a proof-of-concept application designed for electors to manage their registrations on the Electoral Roll.',
                details: 'As the only mobile developer employed by the company, it was my responsibility to design and build a proof-of-concept application designed for electors to manage their registrations on the Electoral Roll.\r\n\r\nA rough version was required within 6 weeks of starting so that it could be demo-ed at the annual tradeshow. Building the application in Xamarin Android with a Portable Class Library (PCL) allowed me to quickly iterate and provide a working demo with push notifications in time for the opening day.\r\n\r\nUsing the PCL approach allowed us to quickly build out the iOS version of the application too, as only the UI needed to be implemented.\r\n\r\nDespite being provided full automony over the product, the role was 100% remote, with the other members of the team on the other side of the country. I found the isolation to be too much and decided, a role which was a little more office based was more suited to me.',
                skills: [
                    'Xamarin Native',
                    'Azure Push Notifications',
                ]
            },
            <EmploymentItem>{
                id: 'sainsburys',
                date: 'Jun 2015 - Jan 2017',
                employer: 'Sainsbury\'s Supermarkets Ltd',
                position: 'Software Engineer',
                overview: 'Worked as a member of the SmartShop team developing Windows and Xamarin (Forms & Native) apps to provide support functions for their new in-store Scan & Go service.', 
                details: 'Worked as a member of the SmartShop team developing Windows and Xamarin (Forms & Native) apps to provide support functions for their new in-store Scan & Go service.\r\n\r\nAs part of a small team feature team of devs, I also provided support to the other mobile app devs, pair programming to fix bugs and helping build features on both the native iOS and Android apps.\r\n\r\nAlongside the SmartShop project, I was also required to help maintain the Sainsbury’s Entertainment eBooks and Video On-Demand (VoD) Windows 8.1 UAP apps.',
                skills: [
                    'Xamarin Forms 2.1',
                    'Windows 10 UWP',
                    'Windows/Phone 8.1 UAP',
                    'Modern source control practice with GitHub',
                    'UX & Accessibility as a 1st class citizen'
                ]
            },
            <EmploymentItem>{
                id: 'verco',
                date: 'Jul 2013 - Jun 2015',
                employer: 'Verco Advisory Services Ltd',
                position: 'Junior Developer',
                overview: '', 
                details: '',
                skills: [
                    'Windows Phone 7/8 Silverlight',
                    'ASP.NET MVC5',
                    'KnockoutJS',
                    'jQuery',
                    'MSSQL',
                ]
            },
            <EmploymentItem>{
                id: 'cpw',
                date: 'Jan 2012 - Jul 2013',
                employer: 'Carphone Warehouse PLC',
                position: 'Customer Service Representative',
                overview: '', 
                details: '',
                skills: [
                    'peer-to-peer training'
                ]
            },
            <EmploymentItem>{
                id: 'bby',
                date: 'Nov 2010 - Jan 2012',
                employer: 'Best Buy UK',
                position: 'Customer Service Advisor',
                overview: '', 
                details: '',
                skills: []
            },
            <EmploymentItem>{
                id: 'morrisons',
                date: 'Jun 2003 - Nov 2010',
                employer: 'Wm Morrisons PLC',
                position: 'Customer Cafe Manager',
                overview: '', 
                details: '',
                skills: [
                    'leadership skills'
                ]
            },
            <EmploymentItem>{
                id: 'multimedia',
                date: 'Jun 2002 - Nov 2002',
                employer: 'Multimedia Shop',
                position: 'Computer Technician',
                overview: '', 
                details: '',
                skills: []
            },
            <EmploymentItem>{
                id: 'bt',
                date: 'Nov 2001',
                employer: 'British Telecoms',
                position: 'System Programming Assistant',
                overview: '', 
                details: '',
                skills: [ ]
            }
        ]
    }

}
