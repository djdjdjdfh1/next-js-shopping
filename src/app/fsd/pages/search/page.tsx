import CategorySection from './category';
import GetSearchList from './list/api/getSearchList';
import { SearchListParams } from './list/types/search.type';
import OptionBar from './list/ui/option-bar';
import SearchList from './list/ui/search-list'
import SearchSection from './search-section/search-section';

type Props = {
    searchParams: SearchListParams
}

export default async function SearchPage({searchParams}: Props) {
    const listData = await GetSearchList({query: searchParams.query, display: searchParams.display, sort: searchParams.sort, start: searchParams.start});

    return (
        <div>
            <SearchSection query={searchParams.query} />
            <br />
            <CategorySection params={searchParams} />
            <br />
            <SearchList params={searchParams} listData={listData} />
        </div>
    )
}