import { SortOption } from '../utils/constants';

export type SearchListParams =  {
    query: string;
    display: number;
    sort: SortOption['value'];
    // catId?: string;
    start: number;
}

export type SearchView ={
    lastBuildDate: string;
    total: number;
    start: number;
    display: number;
    items: Item[];
}

export type Item = {
    title: string;
    link: string;
    image: string;
    lprice: string;
    hprice: string;
    mallName: string;
    productId: string;
    productType: string;
    brand: string;
    maker: string;
    category1: string;
    category2: string;
    category3: string;
    category4: string;
}

export type ListType = 'table' | 'card'