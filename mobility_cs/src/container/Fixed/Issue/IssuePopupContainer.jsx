import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import IssuePopupComponent from '../../../components/Fixed/Issue/IssuePopupComponent';

export default function IssuePopupContainer() {
  const token = useAuth();
  const params = useParams();

  const [popupState, setPopupState] = useState({});
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
        } else {
          alert('정보를 불러오지 못했습니다.');
          window.onload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const applyStatus = async () => {
    let body = {
      id: params.idx,
      token: token,
      refund_state: '접수완료',
    };

    try {
      const res = await axios.post('http://223.130.140.159:1880/chatbot/updateRequest', body);

      if (res.data.result === 'PF_200') {
        alert('접수가 완료되었습니다.');
        window.close();
      } else {
        alert('접수에 실패하였습니다. 다시 시도해주세요.');
        window.close();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IssuePopupComponent
      popupState={popupState}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      applyStatus={applyStatus}
    />
  );
}
