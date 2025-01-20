'use client'

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
    queryName: 'catId' | 'brand'
    title: string;
    listData: string[];
}

export default function CategoryRow({queryName, title, listData}: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedValue, setSelectedValue] = useState<string>('')

    const handleParameter = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
          // 같은 값이면 초기화 (삭제)
        if (params.get(queryName) === value) {
            params.delete(queryName);
        } else {
            // 새로운 값을 추가/변경
            params.set(queryName, value);
        }

        const newQueryString = params.toString();
        const newUrl = newQueryString ? `${window.location.pathname}?${newQueryString}` : window.location.pathname;

        router.push(newUrl);
    }

    return (
        <div className='flex items-center border'>
            <label className='w-28 px-3 py-2 block bg-gray-700 text-white font-bold '>       
                {title}
            </label>
            <div className='px-2 flex items-center gap-3'>
                {listData.map((data, i) => (
                    <span key={i} 
                    className={data === selectedValue ? 'w-fit inline-block bg-green-500 text-white px-2 py-1 rounded-xl hover:cursor-pointer': 'w-fit inline-block hover:cursor-pointer'}
                    onClick={() => {
                        if (data === selectedValue) {
                            setSelectedValue('')
                            handleParameter('')
                        } 
                        else {
                            setSelectedValue(data)
                            handleParameter(data)
                        }
                    }
                }
                    >{data}</span>
                ))}
            </div>
        </div>
    )
}