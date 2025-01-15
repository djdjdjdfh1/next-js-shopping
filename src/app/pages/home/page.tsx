"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();
    
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(e.target.elements.search.value);
            router.push('/search');
        }}>
            <div className='flex justify-center gap-3 my-auto'>
                <div className='w-fit text-2xl font-bold my-auto'>
                    밀듀 shop
                </div>
                <input name='search' className='border-2 rounded-lg w-96 p-2' type='text' placeholder='검색어를 입력하세요'/>
                <button className='border-2 rounded-lg p-3' type='submit'>검색</button>
            </div>
        </form>
        
    )
}