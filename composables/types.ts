export interface TokenData {
    symbol: string;
    name: string;
    slug: string;
    cmcId: number;
    logo: string;
}

export interface Token extends TokenData {
    price: number;
}

export interface WeeklyResult {
    [key: string]: number;
}