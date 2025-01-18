import { SearchPage } from '../fsd/pages';
import { SearchListParams } from '../fsd/pages/search/list/types/search.type';

type Props ={
    searchParams: SearchListParams
}

export default async function Page({searchParams}: Props) {
    return <SearchPage searchParams={searchParams}/>
}