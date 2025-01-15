import axios from 'axios';
import { ShoppingView } from '../types/view';

export default async function GetData() {
    const URL = "/v1/search/shop.json"; 
    const CLIENT_ID = 'q2ADL7AFz5lJGb9kWtwp';
    const CLIENT_SECRET = 'TANUCwn2EE';

    const params = {
        query: "",
        display: 10,
    };
    
    const response = await axios.get(URL, {
    headers: {
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET,
    },
    params,
    });

    const shoppingData:ShoppingView = response.data;

    return shoppingData;
    
    // console.log(response.data)

    return (
        <div>
            {shoppingData.items.map((data, i) => (
                <div key={i}>
                    <img src={data.image} width={200} height={200} />
                    <p>{data.mallName}</p>
                    <p>{data.hprice}</p>
                    <p>{data.lprice}</p>
                    <p>{data.category1}</p>
                    <p>{data.category2}</p>
                    <p>{data.category3}</p>
                    <p>{data.category4}</p>
                </div>
            ))}
        </div>
    )
}