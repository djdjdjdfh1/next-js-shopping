type Props = {
    title: string;
    listData: string[];
}

export default function CategoryRow({title, listData}: Props) {
    return (
        <div className='flex items-center border'>
            <label className='w-28 px-3 py-2 block bg-gray-700 text-white font-bold '>       
                {title}
            </label>
            <div className='px-2 flex items-center gap-3'>
                {listData.map((list) => (
                    <span className='w-fit inline-block'>{list}</span>
                ))}
            </div>
        </div>
    )
}