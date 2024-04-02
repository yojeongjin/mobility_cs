import React from 'react';
import styled from 'styled-components';

export default function Main(props) {
  const { children } = props;

  return <MainBase>{children}</MainBase>;
}

const MainBase = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: calc(var(--vw, 1vw) * 100 - 230px);
  height: 100%;
  padding: 35px 50px;
`;
