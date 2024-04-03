import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getInform } from '../../../redux/modules/inform';
import { setEnd, setStart } from '../../../redux/modules/search';

// hooks
import useAuth from '../../../hooks/useAuth';
import usePagination from '../../../hooks/usePagination';

// components
import Main from '../../../components/Main/Main';
import Pagination from '../../../components/Pagination/Pagination';
import IssueComponent from '../../../components/Fixed/Issue/IssueComponent';

export default function IssueContainer() {
  const token = useAuth();
  const dispatch = useDispatch();
  const totalInfo = useSelector(state => state.inform.inform);
  const inform = totalInfo.filter(info => info.refund_reason !== '현장 요금 발생');

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
      parkingitem_type: 'FIXED',
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
  }, [inform]);

  // popup 새창 열기
  const openPopup = idx => {
    const url = `http://223.130.140.159:88/issue/popup/${idx}`;
    const width = 1000;
    const height = 700;

    // 팝업을 부모 브라우저의 정중앙에 위치하도록함
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <Main>
      {inform && (
        <>
          <IssueComponent
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
