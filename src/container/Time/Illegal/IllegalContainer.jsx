import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getInform } from '../../../redux/modules/inform';
// components
import Main from '../../../components/Main/Main';
import IllegalComponent from '../../../components/Time/Ilegal/IllegalComponent';

export default function IllegalContainer() {
  const dispatch = useDispatch();
  const inform = useSelector(state => state.inform.inform);

  useEffect(() => {
    let body = {
      parkingitem_type: 'TIME',
      car_number: '',
      from: '',
      to: '',
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

  return <Main>{inform && <IllegalComponent openPopup={openPopup} inform={inform} />}</Main>;
}
