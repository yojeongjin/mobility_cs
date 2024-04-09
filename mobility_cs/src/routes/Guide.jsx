import React from 'react';
import styled from 'styled-components';

export default function Guide() {
  return (
    <GuideBase>
      <GuideImg src={`${process.env.PUBLIC_URL}/챗봇안내_240409.png`} alt="로고" />
    </GuideBase>
  );
}

const GuideBase = styled.div`
  max-width: 720px;
  min-width: 280px;
  // height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding: 20px;
  overflow-y: scroll;
`;

const GuideImg = styled.img`
  width: 100%;
  // height: 100%;
  object-fit: cover;
`;
