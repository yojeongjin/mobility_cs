import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import IllegalPopupComponent from '../../../components/Time/Ilegal/IllegalPopupComponent';

export default function IllegalPopupContainer() {
  const token = useAuth();
  const params = useParams();
  const rates = [100, 80];

  const [rate, setRate] = useState('');
  const [popupState, setPopupState] = useState({});
  const [imgUrlArr, setImgUrlArr] = useState([]);
  const [checkItems, setCheckItems] = useState([]);

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
          setRate(100);
        } else {
          alert('정보를 불러오지 못했습니다.');
          window.onload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const calculedFee = useMemo(() => {
    return popupState.payment_amount * rate * 0.01; // 환불금액
  }, [rate]);

  const calculedPoint = useMemo(() => {
    return popupState.point_amount * rate * 0.01; // 환불포인트
  }, [rate]);

  const downloadImg = () => {
    console.log(imgUrlArr);

    fetch(imgUrlArr[0], { method: 'GET' })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'name';
        document.body.appendChild(a);
        a.click();
        setTimeout(_ => {
          window.URL.revokeObjectURL(url);
        }, 1000);
        a.remove();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <IllegalPopupComponent
      calculedFee={calculedFee}
      calculedPoint={calculedPoint}
      popupState={popupState}
      imgUrlArr={imgUrlArr}
      rates={rates}
      setRate={setRate}
      checkItems={checkItems}
      setCheckItems={setCheckItems}
      downloadImg={downloadImg}
    />
  );
}
