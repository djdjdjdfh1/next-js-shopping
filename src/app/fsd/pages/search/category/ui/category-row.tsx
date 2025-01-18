'use client'

import { useState } from 'react';

type Props = {
    title: string;
    listData: string[];
}

export default function CategoryRow({title, listData}: Props) {
    const [selectedValue, setSelectedValue] = useState<string>('')

    return (
        <div className='flex items-center border'>
            <label className='w-28 px-3 py-2 block bg-gray-700 text-white font-bold '>       
                {title}
            </label>
            <div className='px-2 flex items-center gap-3'>
                {listData.map((data, i) => (
                    <span key={i} 
                    className={data === selectedValue ? 'w-fit inline-block bg-green-500 text-white px-2 py-1 rounded-xl hover:cursor-pointer': 'w-fit inline-block hover:cursor-pointer'}
                    onClick={() => setSelectedValue(data)}
                    >{data}</span>
                ))}
            </div>
        </div>
    )
}