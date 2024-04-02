import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function CheckModal(props) {
  const { carNumber, rate, calculedFee, calculedPoint, onCloseModal, refundFee } = props;

  useEffect(() => {
    // 외부화면 스크롤방지
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  // 모달 밖 클릭시 모달 off
  const outside = useRef();
  const handleOutside = e => {
    if (!outside.current.contains(e.target)) {
      onCloseModal();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  });

  return (
    <ModalBase>
      <ModalInner ref={outside}>
        <ModalH2>환불내역</ModalH2>

        <ModalInfo>
          <InfoMenu>
            <InfoItem>
              <ItemName>차량번호</ItemName>
              <ItemContent>{carNumber}</ItemContent>
            </InfoItem>
            <InfoItem>
              <ItemName>환불비율</ItemName>
              <ItemContent>{rate}%</ItemContent>
            </InfoItem>
            <InfoItem>
              <ItemName>환불금액</ItemName>
              <ItemContent>{calculedFee}원</ItemContent>
            </InfoItem>
            <InfoItem>
              <ItemName>환불포인트</ItemName>
              <ItemContent>{calculedPoint}포인트</ItemContent>
            </InfoItem>
          </InfoMenu>
        </ModalInfo>

        <BtnContainer>
          <CloseBtn
            onClick={() => {
              onCloseModal();
            }}
          >
            닫기
          </CloseBtn>
          <ApplyBtn
            onClick={() => {
              refundFee();
            }}
          >
            환불하기
          </ApplyBtn>
        </BtnContainer>
      </ModalInner>
    </ModalBase>
  );
}

const ModalBase = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  z-index: 999;
`;

const ModalInner = styled.div`
  background: #fff;
  width: 100%;
  padding: 35px 40px 30px;
  max-width: 500px;
  border-radius: 5px;
`;

const ModalH2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 13px;
`;

const ModalInfo = styled.div`
  margin-bottom: 30px;
  padding-top: 13px;
  border-top: 1px solid #ebecf0;
`;

const InfoMenu = styled.ul``;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 2;
`;

const ItemName = styled.h4`
  color: #757575;
`;

const ItemContent = styled.span`
  color: #333;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ApplyBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  height: 40px;
  padding: 0 36px;
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
`;

const CloseBtn = styled(ApplyBtn)`
  background-color: transparent;
  color: ${props => props.theme.fontColor};
  margin-right: 10px;
  &:hover {
    background-color: #ebebeb;
  }
`;
