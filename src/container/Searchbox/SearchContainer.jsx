import React, { useCallback, useRef } from 'react';
import dayjs from 'dayjs';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getInform } from '../../redux/modules/inform';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Search from '../../components/Searchbox/Search';

export default function SearchContainer(props) {
  const { type } = props;

  const token = useAuth();
  const dispatch = useDispatch();
  const carNumRef = useRef(null);
  // from-to
  const startDate = useSelector(state => state.search.startDate);
  const endDate = useSelector(state => state.search.endDate);

  const searchInfo = useCallback(() => {
    let body = {
      parkingitem_type: type,
      car_number: carNumRef.current.value === null ? '' : carNumRef.current.value,
      from: dayjs(startDate).format('YYYY-MM-DD'),
      to: dayjs(endDate).format('YYYY-MM-DD'),
      token: token,
    };

    // 정보 가져오기
    dispatch(getInform(body));
  }, [dispatch, startDate, endDate]);

  const handleOnKeyPress = e => {
    // 엔터키 입력
    if (e.key === 'Enter') {
      searchInfo();
    }
  };

  return (
    <Search carNumRef={carNumRef} searchInfo={searchInfo} handleOnKeyPress={handleOnKeyPress} />
  );
}
