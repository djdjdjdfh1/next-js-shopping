export type SortOption = { label: string, value: 'sim' | 'asc' | 'dsc' | 'date' };

export const SORT_OPTION: SortOption[] = [
    { label: '정확도순', value: 'sim' },
    { label: '낮은 가격순', value: 'asc' }, 
    { label: '높은 가격순', value: 'dsc' }, 
    { label: '등록일순', value: 'date' }
];