export interface QueryOption {
    select?: string;
    filter?: string;
    params?: string[];
    pageSize?: number;
    start?: number;
    orderBy?: string;
    method?: string;
    emMethod?: string;
}
