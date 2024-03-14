import React, { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getInform } from '../../../redux/modules/inform';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import Main from '../../../components/Main/Main';
import IllegalComponent from '../../../components/Time/Ilegal/IllegalComponent';
import Pagination from '../../../components/Pagination/Pagination';

export default function IllegalContainer() {
  const token = useAuth();
  const dispatch = useDispatch();
  const inform = useSelector(state => state.inform.inform);

  // pagination state
  const [page, setPage] = useState(1); // 현재 페이지 수
  const totalPost = inform.length;
  const pageRange = 10; // 페이지당 보여줄 게시물 수
  const btnRange = Math.ceil(totalPost / pageRange) <= 5 ? Math.ceil(totalPost / pageRange) : 5;

  const currentSet = Math.ceil(page / btnRange); // 현재 버튼이 몇번째 세트인지 나타내는 수
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 보여질 버튼의 첫번째 수

  const endPage = startPage + btnRange - 1; // 현재 보여질 끝 버튼의 수
  const totalSet = Math.ceil(Math.ceil(totalPost / pageRange) / btnRange); // 전체 벼튼 세트 수

  const startPost = (page - 1) * pageRange + 1; // 시작 게시물 번호
  const endPost = startPost + pageRange - 1; // 끝 게시물 번호

  useEffect(() => {
    let body = {
      parkingitem_type: '',
      car_number: '',
      from: '',
      to: '',
      token: token,
    };
    // 정보 가져오기
    dispatch(getInform(body));
  }, []);

  // popup 새창 열기
  const openPopup = idx => {
    const url = `http://localhost:3000/illegal/popup/${idx}`;
    const width = 1400;
    const height = 770;

    // 팝업을 부모 브라우저의 정중앙에 위치하도록함
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <Main>
      {inform && (
        <>
          <IllegalComponent
            openPopup={openPopup}
            inform={inform}
            startPost={startPost}
            endPost={endPost}
          />
          <Pagination
            btnRange={btnRange}
            currentSet={currentSet}
            page={page}
            setPage={setPage}
            startPage={startPage}
            endPage={endPage}
            totalSet={totalSet}
          />
        </>
      )}
    </Main>
  );
}
