import React from 'react';
import styled from 'styled-components';

export default function Guide() {
  return (
    <GuideBase>
      <GuideImg src={`${process.env.PUBLIC_URL}/guide_img.png`} alt="챗봇 안내" />
    </GuideBase>
  );
}

const GuideBase = styled.div`
  max-width: 720px;
  min-width: 280px;
  // height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  overflow-y: scroll;
`;

const GuideImg = styled.img`
  width: 100%;
  // height: 100%;
  object-fit: cover;
`;
