import React from 'react';
import styled from 'styled-components';

export default function Policy() {
  return (
    <PolicyBase>
      <PolicyHeading>
        <Logo src={`${process.env.PUBLIC_URL}/logo.png`} alt="로고" />

        <PolicyP>
          당사의 환불에 대한 정책은 예약 기반의 서비스를 제공하므로 취소시에 환불수수료가
          발생하오며, 상품권 유형별 환불은 아래 조건에 해당되는 경우에만 가능합니다.
        </PolicyP>
      </PolicyHeading>

      <PolicyMenu>
        <PolicyH4>1. 시간권</PolicyH4>
        <PolicyList>예약시작시간 30분 이전까지만 취소 가능</PolicyList>
        <PolicyList>예약취소시 20% 수수료 부과</PolicyList>
        <PolicyList>
          부정주차 또는 기타사유의 경우, 증빙자료 업로드 이후 확인절차를 거쳐 취소
        </PolicyList>
      </PolicyMenu>

      <PolicyMenu>
        <PolicyH4>2. 당일권</PolicyH4>
        <PolicyList>결제 당일에만 취소 가능</PolicyList>
        <PolicyList>당일 예약취소시 20% 수수료 부과</PolicyList>
        <PolicyList>만차 또는 현장이슈의 경우, 환불접수후 확인절차를 거쳐 취소</PolicyList>
        <PolicyList>현장요금이 발생의 경우, 증빙자료 업로드 이후 확인절차를 거쳐 취소</PolicyList>
      </PolicyMenu>

      <PolicyMenu>
        <PolicyH4>3. 월주차</PolicyH4>
        <PolicyList>예약시작일 3일 이전까지만 취소 가능</PolicyList>
        <PolicyList>예약취소시 20% 수수료 부과</PolicyList>
        <PolicyList>현장요금이 발생의 경우, 증빙자료 업로드 이후 확인절차를 거쳐 취소</PolicyList>
      </PolicyMenu>
    </PolicyBase>
  );
}

const PolicyBase = styled.div`
  max-width: 720px;
  min-width: 280px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding: 25px 20px;
  overflow-y: scroll;
`;

const PolicyHeading = styled.div`
  margin: 0 0 30px;
`;

const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto 25px;
`;

const PolicyP = styled.p`
  color: #606060;
  line-height: 22px;
`;

const PolicyH4 = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.thirdColor};
  margin-bottom: 8px;
`;

const PolicyMenu = styled.ul`
  margin-bottom: 15px;
  color: ${props => props.theme.thirdColor};
  &:last-child {
    margin-bottom: 0px;
  }
`;

const PolicyList = styled.li`
  position: relative;
  counter-increment: circle-counter;
  padding-left: 27px;
  margin-bottom: 7px;
  line-height: 1.7;
  letter-spacing: -0.3px;
  font-size: 14px;
  &:after {
    content: ')';
    // background: ${props => props.theme.secondaryColor};
    position: absolute;
    top: 3px;
    left: 20px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 11px;
    z-index: 1;
  }
  &:before {
    content: counter(circle-counter);
    position: absolute;
    top: 3px;
    left: 10px;
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme.secondaryColor};
    z-index: 2;
  }
`;
