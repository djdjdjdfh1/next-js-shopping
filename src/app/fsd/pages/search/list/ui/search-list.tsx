'use client'

import { useState } from 'react';
import { ListType, SearchListParams, SearchView } from '../types/search.type';
import OptionBar from './option-bar';
import Pagination from './pagination';

type Props = {
    params: SearchListParams;
    listData: SearchView | null;
}

export default function SearchList({params, listData}: Props) {
    if (!listData) return <>Loading...</>

    const [listType, setListType] = useState<ListType>('table');

    return (
        <div>
            <OptionBar params={params} listType={listType} setListType={setListType} />
            <div className="border-t-2 border-black">
                {listType === 'table' && listData.items.map((data, i) => (
                        <div key={i} className='flex items-center py-3 cursor-pointer hover:bg-blue-100'
                            onClick={() => window.open(data.link)}
                        >
                            <img alt='이미지' src={data.image} width={140} height={140}/>
                            <div className='h-full flex flex-col px-2'>
                                <p dangerouslySetInnerHTML={{__html: data.title}} />
                                <div>
                                    <p>{data.lprice ?? data.hprice}원</p>
                                    <div>
                                        <span>{data.category1}</span>
                                        <span>{' '}〉{' '}{data.category2}</span>
                                        <span>{' '}〉{' '}{data.category3}</span>
                                        <span>{' '}〉{' '}{data.category4}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                ))}    
                {listType === 'card' && (
                    <div className="flex flex-wrap gap-3 box-border">
                        {listData.items.map((data, i) => (
                            <div 
                                key={i} 
                                className='flex flex-col items-center py-3 cursor-pointer hover:border-black-300 border-black'
                                style={{
                                    flex: '1 1 calc((100% - 4 * 12px) / 5)',  
                                    maxWidth: 'calc((100% - 4 * 12px) / 5)', 
                                }}
                            >
                                <img 
                                    alt='이미지' 
                                    className='hover:border-2 hover:border-blue-500'
                                    src={data.image} 
                                    width={'100%'} 
                                    height={'100%'}
                                    onClick={() => window.open(data.link)}
                                />
                                <div className='h-full flex flex-col px-2'>
                                    <p dangerouslySetInnerHTML={{__html: data.title}} />
                                    <p>{data.lprice ?? data.hprice}원</p>
                                </div>
                            </div> 
                        ))}    
                    </div>
                )}
            </div>
            <Pagination listData={listData} />
        </div>
    );
}