import Image from 'next/image';
import { SearchView } from '../types/search.type';

type Props = {
    listData: SearchView | null;
}

export default function SearchList({listData}: Props) {
    if (!listData) return <>Loading...</>

    return (
    <div className="border-t-2 border-black">
        {listData.items.map((data, i) => (
            <div key={i} className='flex items-center py-3'>
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
                <div className='w-1 h-full bg-black' />
            </div>
        ))}    
    </div>
    );
}