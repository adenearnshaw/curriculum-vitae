export interface IEmploymentItem {
    id: string;
    date: string;
    employer: string;
    position: string;
    overview: string;
    details: string;
    skills: string[];
    portfolio_items?: string[];
    isOmittedInPrint?: boolean;
}
