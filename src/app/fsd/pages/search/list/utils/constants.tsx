export type SortOption = { label: string, value: 'sim' | 'asc' | 'dsc' | 'date' };
export type PagingOption = { label: string, value: '20' | '40' | '60' | '80' };

export const SORT_OPTION: SortOption[] = [
    { label: '정확도순', value: 'sim' },
    { label: '낮은 가격순', value: 'asc' }, 
    { label: '높은 가격순', value: 'dsc' }, 
    { label: '등록일순', value: 'date' }
];

export const PAGING_TYPE: PagingOption[] = [
    { label: '20개씩 보기', value: '20' },
    { label: '40개씩 보기', value: '40' }, 
    { label: '60개씩 보기', value: '60' }, 
    { label: '80개씩 보기', value: '80' }
]