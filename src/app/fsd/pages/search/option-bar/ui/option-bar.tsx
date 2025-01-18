'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SORT_OPTION, SortOption } from '../utils/constants';
import { SearchListParams } from '../../list/types/search.type';

type Props = {
    params: SearchListParams;
}

export default function OptionBar({params}: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedValue, setSelectedValue] = useState<SortOption['value']>('sim')

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
    
    useEffect(()=>{
        if (params?.sort) {
            setSelectedValue(params.sort);
            console.log(params?.sort)
            
        }
    }, [params])

    return (
        <div className='flex items-center gap-2'>
            {SORT_OPTION.map((option,i) => (
                <div key={i} className={option.value === selectedValue ? 'text-black font-bold hover:cursor-pointer': 'text-gray-500 hover:cursor-pointer'}
                    onClick={() => onLabelClick(option.value)}
                >
                    {option.label}
                </div>
            ))}
        </div>
    )
}
