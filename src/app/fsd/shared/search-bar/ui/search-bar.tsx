import Link from 'next/link';

export default function SearchBar() {
    return (
        <div className='flex justify-center gap-3 my-auto'>
            <div className='w-fit text-2xl font-bold my-auto'>
                <Link href='/'>밀듀 shop</Link>
            </div>
            <input name='search' className='border-2 rounded-lg w-96 p-2' type='text' placeholder='검색어를 입력하세요'/>
            <button className='border-2 rounded-lg p-3' type='submit'>검색</button>
        </div>
    )
}