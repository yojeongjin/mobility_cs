import React, { useEffect, useLayoutEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// components
import IllegalPopupComponent from '../../../components/Time/Ilegal/IllegalPopupComponent';

export default function IllegalPopupContainer() {
  const params = useParams();
  const rates = [100, 80];
  const [rate, setRate] = useState('');
  const [popupState, setPopupState] = useState({});
  const [imgUrlArr, setImgUrlArr] = useState([]);

  useLayoutEffect(() => {
    let body = {
      id: params.idx,
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
    return popupState.payment_amount * rate * 0.01;
  }, [rate]);

  const calculedPoint = useMemo(() => {
    return popupState.point_amount * rate * 0.01;
  }, [rate]);

  return (
    <IllegalPopupComponent
      calculedFee={calculedFee}
      calculedPoint={calculedPoint}
      popupState={popupState}
      imgUrlArr={imgUrlArr}
      rates={rates}
      setRate={setRate}
    />
  );
}
