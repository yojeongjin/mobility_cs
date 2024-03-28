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
        <ModalHead>
          <ModalH3>환불 내역</ModalH3>
          <P>💰 확인을 누르시면 다음 내역이 환불됩니다.</P>
        </ModalHead>

        <ModalInfo>
          <InfoMenu>
            <InfoItem>
              <ItemName>차량 번호</ItemName>
              <ItemContent>{carNumber}</ItemContent>
            </InfoItem>

            <InfoItem>
              <ItemName>환불 비율</ItemName>
              <ItemContent>{rate}%</ItemContent>
            </InfoItem>

            <InfoItem>
              <ItemName>환불 금액</ItemName>
              <ItemContent>{calculedFee}원</ItemContent>
            </InfoItem>

            <InfoItem>
              <ItemName>환불 포인트</ItemName>
              <ItemContent>{calculedPoint}포인트</ItemContent>
            </InfoItem>
          </InfoMenu>
        </ModalInfo>

        <BtnContainer>
          <CancelBtn
            onClick={() => {
              onCloseModal();
            }}
          >
            닫기
          </CancelBtn>

          <CheckBtn
            onClick={() => {
              refundFee();
            }}
          >
            확인
          </CheckBtn>
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
  max-width: 340px;
  border-radius: 5px;
  text-align: center;
`;

const ModalHead = styled.div`
  margin: 25px 0 20px;
  line-height: 1.7;
`;

const ModalH3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.4px;
  color: #757575;
`;

const ModalInfo = styled.div`
  // background: #f6f7f9;
  background: #fafafa;
  padding: 15px 20px;
  margin-bottom: 30px;
`;

const InfoMenu = styled.ul``;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 1.8;
  font-size: 14px;
`;

const ItemName = styled.h4`
  color: #757575;
`;

const ItemContent = styled.span`
  color: #333;
`;

const BtnContainer = styled.div``;

const CheckBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  width: 70%;
  height: 55px;
  color: #fff;
  border-radius: 0 0 5px 0;
`;

const CancelBtn = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  width: 30%;
  height: 55px;
  color: #fff;
  border-radius: 0 0 0 5px;
`;
