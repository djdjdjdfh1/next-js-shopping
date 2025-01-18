"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { SearchBar } from '../../shared';

export default function HomePage() {
    const router = useRouter();
    
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            router.push(`/search?query=${e.target.elements.search.value}`);
        }}>
            <SearchBar />
        </form>
        
    )
}