import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import IllegalPopupComponent from '../../../components/Time/Ilegal/IllegalPopupComponent';
import CheckModal from '../../../components/Modal/CheckModal';

export default function IllegalPopupContainer() {
  const token = useAuth();
  const params = useParams();
  const rates = [100, 80];

  const [rate, setRate] = useState('');
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
    // 추후 수정
    const link = document.createElement('a');

    link.setAttribute('href', imgUrlArr[0]);
    link.setAttribute('download', '이미지.jpeg');

    // 링크를 문서(body)에 추가
    document.body.appendChild(link);

    // 링크 클릭 => 파일 다운로드
    link.click();
  };

  const refundFee = async () => {
    let body = {
      order_id: popupState.order_id,
      refund_rate: rate,
      refund_reason: popupState.refund_reason,
      token: token,
    };

    try {
      const res = await axios.post('http://223.130.140.159:1880/chatbot/cancelPay', body);

      if (res.data.result === 'PF_200') {
        alert('환불이 완료되었습니다.');
        setModalOpen(false);
        window.location.reload('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <IllegalPopupComponent
        calculedFee={calculedFee}
        calculedPoint={calculedPoint}
        popupState={popupState}
        imgUrlArr={imgUrlArr}
        rates={rates}
        setRate={setRate}
        checkItems={checkItems}
        setCheckItems={setCheckItems}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        downloadImg={downloadImg}
      />
      {modalOpen && (
        <CheckModal
          rate={rate}
          carNumber={popupState.car_number}
          calculedFee={calculedFee}
          calculedPoint={calculedPoint}
          onCloseModal={() => {
            setModalOpen(false);
          }}
          refundFee={refundFee}
        />
      )}
    </>
  );
}
