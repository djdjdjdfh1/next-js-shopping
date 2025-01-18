'use client'

import React from 'react';
import { SearchBar } from '@/app/fsd/shared';
import { useSearchParams, useRouter} from 'next/navigation';

export default function SearchSection() {
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
            <SearchBar />
        </form>
    )
}