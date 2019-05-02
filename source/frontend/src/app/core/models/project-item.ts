export interface IProjectItem {
    id: string;
    name: string;
    short_name: string;
    repository_url?: string;
    app_store_url?: string;
    icon?: string;
    banner?: string;
    description?: string;
    technologies?: string[];
    order: number;
}
