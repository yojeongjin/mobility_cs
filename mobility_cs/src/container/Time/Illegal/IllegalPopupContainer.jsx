import React, { useEffect, useState, useMemo, useRef } from 'react';
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

  const cmtRef = useRef(null);
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

  const downloadImg = async () => {
    if (checkItems.length === 0) return alert('다운로드 할 사진을 선택해주세요.');
    const urlArr = getParams();

    for (let i = 0; i < urlArr.length; i++) {
      await axios
        .get(urlArr[i], {
          responseType: 'blob',
        })
        .then(res => {
          console.log(res);
          const url = window.URL.createObjectURL(new Blob([res.data], { type: 'image/jpeg' })); // blob 객체 생성 및 url 생성
          const a = document.createElement('a'); // a태그 생성
          console.log(url);

          a.href = url; // url 연결
          a.download = `${popupState.parkinglot_name}(${popupState.car_number})-${i + 1}`; // 파일명 설정

          document.body.appendChild(a);
          a.click();

          // 다운로드 후 url, a 태그 정리
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const getParams = () => {
    let arr = [];
    for (const item of checkItems) {
      arr.push(imgUrlArr[item].split('3000')[1]);
    }

    return arr;
  };

  const refundFee = async () => {
    let body = {
      order_id: popupState.order_id,
      refund_rate: rate,
      refund_reason: popupState.refund_reason,
      refund_admin_comment: cmtRef.current.value,
      token: token,
    };

    try {
      const res = await axios.post('http://223.130.140.159:1880/chatbot/cancelPay', body);

      if (res.data.result === 'PF_200') {
        alert('환불이 완료되었습니다.');
        setModalOpen(false);
        window.close();
      } else {
        alert('환불에 실패하였습니다. 다시 시도해주세요.');
        window.close();
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
        cmtRef={cmtRef}
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
