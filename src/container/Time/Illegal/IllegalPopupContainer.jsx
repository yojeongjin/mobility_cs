import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// components
import IllegalPopupComponent from '../../../components/Time/Ilegal/IllegalPopupComponent';

export default function IllegalPopupContainer() {
  const params = useParams();
  const [popupState, setPopupState] = useState([]);
  const [imgUrlArr, setImgUrlArr] = useState([]);

  useEffect(() => {
    let body = {
      id: params.idx,
    };
    axios
      .post('http://223.130.140.159:1880/chatbot/readRequest', body)
      .then(res => {
        const result = res.data;
        if (result.result === 'PF_200') {
          const data = result.data[0];
          let arr = [];
          if (data.refund_data_uri) {
            arr = data.refund_data_uri?.split(',');
          } else {
            arr = [];
          }
          setImgUrlArr(arr);
          setPopupState(data);
        } else {
          alert('정보를 불러오지 못했습니다.');
          window.onload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <IllegalPopupComponent popupState={popupState} imgUrlArr={imgUrlArr} />;
}
