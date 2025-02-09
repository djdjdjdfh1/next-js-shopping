'use client'

import { useSearchParams } from 'next/navigation';
import CategoryRow from './ui/category-row'

export default function CategorySection() {
    const searchParams = useSearchParams();
    
    const catId = searchParams.get('catId') || ''
    const brand = searchParams.get('brand') || ''

    return (
        <>
            <CategoryRow queryName='catId' title='카테고리' listData={CATEGORY} defaultValue={catId}  />
            <CategoryRow queryName='brand' title='브랜드' listData={BRAND} defaultValue={brand}  />
        </>
    ) 
}

const CATEGORY = ['남성러닝화', '남성스니커즈', '남성워킹화', '남성작업화', '남성슬립온', '남성정장구두', '남성샌들', '여성러닝화', '여성스니커즈']
const BRAND = ['나이키', '아디다스', '뉴발란스', '아식스', '스케쳐스', '프로스펙스', '휠라', '반스', '호카', '리복', '푸마', '탠디', '르무통']