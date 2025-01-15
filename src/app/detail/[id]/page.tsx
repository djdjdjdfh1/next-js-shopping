"use client"

import React, { useEffect, useState } from 'react';
import GetData from '../components/GetData'
import { ShoppingView } from '../types/view';

export default function DetailPage({params}) {
    const {id} = React.use(params)

    const [shoppingData, setShoppingData] = useState<ShoppingView | undefined>();

    const test = ['아디다스', '나이키', '뉴발란스', '아식스']

    console.log(typeof test.join(','));

    useEffect(() => {
        const test = GetData();
        test.then((response) => {
            console.log(response)
            setShoppingData(response)
        }).catch((e) => console.error(e))
    }, [])


    return (
        <>
            <div>
                상세 페이지 {id}
            </div>
            <div>
            {shoppingData?.items?.map((data, i) => (
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
        </>
    )
}