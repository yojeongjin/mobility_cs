import React, { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getInform } from '../../redux/modules/inform';
import { setEnd, setStart } from '../../redux/modules/search';

// hooks
import useAuth from '../../hooks/useAuth';
import usePagination from '../../hooks/usePagination';

// components
import Main from '../../components/Main/Main';
import Pagination from '../../components/Pagination/Pagination';
import MonthlyComponent from '../../components/Monthly/MonthlyComponent';

export default function MonthlyContainer() {
  const token = useAuth();
  const dispatch = useDispatch();
  const inform = useSelector(state => state.inform.inform);

  // pagination state
  const {
    startPost,
    endPost,
    pageRange,
    btnRange,
    currentSet,
    page,
    startPage,
    endPage,
    totalSet,
    totalPage,
    changePage,
  } = usePagination(inform);

  useEffect(() => {
    let body = {
      parkingitem_type: 'MONTHLY',
      car_number: '',
      from: '',
      to: '',
      token: token,
    };
    // 정보 가져오기
    dispatch(getInform(body));
    // 날짜 변경
    dispatch(setStart(new Date()));
    dispatch(setEnd(new Date()));
  }, []);

  // popup 새창 열기
  const openPopup = idx => {
    const url = `http://223.130.140.159:88/charge/popup/${idx}`;
    const width = 1400;
    const height = 600;

    // 팝업을 부모 브라우저의 정중앙에 위치하도록함
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <Main>
      {inform && (
        <>
          <MonthlyComponent
            openPopup={openPopup}
            inform={inform}
            startPost={startPost}
            endPost={endPost}
            pageRange={pageRange}
          />
          <Pagination
            btnRange={btnRange}
            currentSet={currentSet}
            page={page}
            changePage={changePage}
            startPage={startPage}
            endPage={endPage}
            totalSet={totalSet}
            totalPage={totalPage}
          />
        </>
      )}
    </Main>
  );
}
