import { SearchBar } from '../../shared';
import CategorySection from './category';
import GetSearchList from './list/api';
import SearchList from './list/ui/search-list'

export default async function SearchPage() {
    const listData = await GetSearchList({query: '아디다스신발', display: 40});

    return (
        <div>
            <SearchBar />
            <CategorySection />
            <SearchList listData={listData} />
        </div>
    )
}