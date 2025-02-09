import axios from 'axios';
import { SearchListParams, SearchView } from '../types/search.type';

export default async function GetSearchList({query, display, sort, start}: SearchListParams) {
    const URL = process.env.API_URL;
    const CLIENT_ID = process.env.ClientID;
    const CLIENT_SECRET = process.env.ClientSecret;

    const params = {
        query,
        display,
        sort,
        start
    };
    
    try {
        const res = await axios.get(URL, {
            params,
            headers: {
                "X-Naver-Client-Id": CLIENT_ID,
                "X-Naver-Client-Secret": CLIENT_SECRET,
            },
        });
        const data:SearchView = res.data;
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}