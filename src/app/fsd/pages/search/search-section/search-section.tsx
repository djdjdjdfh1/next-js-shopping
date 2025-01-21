'use client'

import React from 'react';
import { SearchBar } from '@/app/fsd/shared';
import { useSearchParams, useRouter} from 'next/navigation';
import { SearchListParams } from '../list/types/search.type';

type Props = {
    query: SearchListParams['query'];
}

export default function SearchSection({query}: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const handleParameter = (e: React.FormEvent<HTMLFormElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('query', e.target.elements.search.value);
    
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        router.push(newUrl);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleParameter(e);
        }}>
            <SearchBar query={query} />
        </form>
    )
}