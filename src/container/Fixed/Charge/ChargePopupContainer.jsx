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

  const downloadImg = async () => {
    await axios
      .get('/images/2024314_1710397330908_7.0173.jpeg', {
        responseType: 'blob',
      })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data])); // blob 객체 생성 및 url 생성
        const a = document.createElement('a'); // a태그 생성

        a.href = url; // url 연결
        a.download = 'image.jpeg'; // 파일명 설정

        document.body.appendChild(a);
        a.click();

        // 다운로드 후 url, a 태그 정리
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(err => {
        console.log(err);
      });
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
