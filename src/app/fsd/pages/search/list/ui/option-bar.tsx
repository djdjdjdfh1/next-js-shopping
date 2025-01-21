'use client'

import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PAGING_TYPE, PagingOption, SORT_OPTION, SortOption } from '../utils/constants';
import { ListType } from '../../list/types/search.type';

type Props = {
    listType: ListType;
    setListType: Dispatch<SetStateAction<ListType>>
}

export default function OptionBar({listType, setListType}: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || 'sim'
    const display = searchParams.get('display') || 20

    const [selectedValue, setSelectedValue] = useState<SortOption['value']>(sort)

    const onLabelClick = (value: SortOption['value']) => {
        setSelectedValue(value);
        handleSortParameter(value)
    }
    
    const handleSortParameter = (value: SortOption['value']) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', value);

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        router.push(newUrl);
    } 
    
    const handleDisplayParameter = (value: PagingOption['value']) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('display', value);

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        router.push(newUrl);
    } 

    return (
        <div className='flex justify-between items-center gap-2'>
            <div className='flex items-center gap-2' >
                {SORT_OPTION.map((option,i) => (
                    <div key={i} className={option.value === selectedValue ? 'text-black font-bold hover:cursor-pointer': 'text-gray-500 hover:cursor-pointer'}
                    onClick={() => onLabelClick(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
            <div className='flex items-center gap-2'>
                <select 
                    className='border-2' 
                    name="display" 
                    onChange={(e) => handleDisplayParameter(e.target.value as PagingOption['value'])}
                    defaultValue={display}
                >
                    {PAGING_TYPE.map((option, i) => (
                        <option key={i} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <div className='flex items-center border'>
                    <button 
                        className={listType === 'table' ? 'text-blue-600 border' : 'border'}
                        onClick={() => setListType('table')}
                    >
                        테이블
                    </button>
                    <button 
                        className={listType === 'card' ? 'text-blue-600 border' :'border'}
                        onClick={() => setListType('card')}
                    >
                        카드
                    </button>
                </div>
            </div>
        </div>
    )
}
