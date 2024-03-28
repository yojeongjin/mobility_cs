import { useState } from 'react';

export default function usePagination(inform) {
  const [page, setPage] = useState(1);

  const pageRange = 10; // 페이지당 보여줄 게시물 수
  const totalPost = inform.length; // 총 게시물 수
  const totalPage = Math.ceil(totalPost / pageRange); // 총 페이지 개수

  const btnRange = Math.ceil(totalPost / pageRange) <= 5 ? Math.ceil(totalPost / pageRange) : 5;
  const currentSet = Math.ceil(page / btnRange); // 현재 버튼이 몇번째 세트인지 나타내는 수

  const startPage = (currentSet - 1) * btnRange + 1; // 현재 보여질 버튼의 첫번째 수
  const endPage = startPage + btnRange - 1; // 현재 보여질 끝 버튼의 수

  const totalSet = Math.ceil(Math.ceil(totalPost / pageRange) / btnRange); // 전체 버튼 세트 수

  const startPost = (page - 1) * pageRange + 1; // 시작 게시물 번호
  const endPost = startPost + pageRange - 1; // 끝 게시물 번호

  const changePage = i => {
    setPage(i);
  };

  return {
    btnRange,
    currentSet,
    page,
    startPage,
    endPage,
    totalSet,
    startPost,
    endPost,
    pageRange,
    totalPost,
    totalPage,
    changePage,
  };
}
