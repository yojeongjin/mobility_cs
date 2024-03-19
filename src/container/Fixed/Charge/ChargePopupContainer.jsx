import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import ChargePopupComponent from '../../../components/Fixed/ChargePopupComponent';

export default function ChargePopupContainer() {
  const token = useAuth();
  const params = useParams();

  const [popupState, setPopupState] = useState({});
  const [imgUrlArr, setImgUrlArr] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let body = {
      id: params.idx,
      token: token,
    };
    axios
      .post('http://223.130.140.159:1880/chatbot/readRequest', body)
      .then(res => {
        const result = res.data;
        if (result.result === 'PF_200') {
          const data = result.data[0];
          setPopupState(data);
          let arr = [];
          if (data.refund_data_uri) {
            arr = data.refund_data_uri?.split(',');
          } else {
            arr = [];
          }
          setImgUrlArr(arr);
        } else {
          alert('정보를 불러오지 못했습니다.');
          window.onload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const downloadImg = () => {
    // 추후 수정
    const link = document.createElement('a');

    link.setAttribute('href', imgUrlArr[0]);
    link.setAttribute('download', '이미지.jpeg');

    // 링크를 문서(body)에 추가
    document.body.appendChild(link);

    // 링크 클릭 => 파일 다운로드
    link.click();
  };

  return (
    <ChargePopupComponent
      popupState={popupState}
      imgUrlArr={imgUrlArr}
      checkItems={checkItems}
      setCheckItems={setCheckItems}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      downloadImg={downloadImg}
    />
  );
}
