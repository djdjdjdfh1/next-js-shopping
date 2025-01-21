'use client'

import { useState } from 'react';
import { SearchView } from '../types/search.type';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
    listData: SearchView;
}

export default function Pagination({listData}: Props) {
    const { start, total } = listData;
    const router = useRouter();
    const searchParams = useSearchParams();

    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수
    const totalPages = Math.ceil(total / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(Math.ceil(start / itemsPerPage));
    const [pageGroup, setPageGroup] = useState(0); // 현재 보여줄 페이지 번호 그룹 (0부터 시작)

    const maxPageButtons = 10; // 한 번에 보여줄 페이지 번호 개수
    const startPage = pageGroup * maxPageButtons + 1; // 현재 그룹의 시작 페이지
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages); // 현재 그룹의 끝 페이지

    // 페이지 변경 핸들러
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const params = new URLSearchParams(searchParams.toString());
        params.set('start', JSON.stringify(page));

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        console.log(`Page changed to: ${page}`);
        router.push(newUrl);
    };

    // 그룹 이동 핸들러
    const handlePrevGroup = () => {
        if (pageGroup > 0) {
            setPageGroup(pageGroup - 1);
        }
    };
    
    const handleNextGroup = () => {
        if (endPage < totalPages) {
            setPageGroup(pageGroup + 1);
        }
    };

    return (
        <div>
            {/* 페이지네이션 */}
            <div className="flex items-center justify-center mt-4 space-x-2">
                {/* 이전 그룹 버튼 */}
                <button
                    onClick={handlePrevGroup}
                    disabled={pageGroup === 0}
                    className={`px-3 py-1 rounded ${pageGroup === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                    이전
                </button>

                {/* 페이지 번호 버튼 */}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                    const page = startPage + index;
                    return (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* 다음 그룹 버튼 */}
                <button
                    onClick={handleNextGroup}
                    disabled={endPage === totalPages}
                    className={`px-3 py-1 rounded ${endPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                    다음
                </button>
            </div>
        </div>
    );
}