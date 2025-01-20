'use client'

import { SearchListParams } from '@/app/fsd/pages/search/list/types/search.type';
import Link from 'next/link';
import React, { use, useState } from 'react';

type Props = {
    query: SearchListParams['query'];
}

export default function SearchBar({query}: Props) {
    const [inputText, setInputText] = useState(query)

    return (
        <div className='flex justify-center gap-3 my-auto'>
            <div className='w-fit text-2xl font-bold my-auto'>
                <Link href='/'>밀듀 shop</Link>
            </div>
            <input name='search' className='border-2 rounded-lg w-96 p-2' type='text' 
            placeholder='검색어를 입력하세요' value={inputText} onChange={e => setInputText(e.target.value)}
            />
            <button className='border-2 rounded-lg p-3' type='submit'>검색</button>
        </div>
    )
}