import React from 'react';
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

export default function LoadingComponent() {
  return (
    <LoadingBase>
      <PropagateLoader size={30} color="#02ca2d" />
    </LoadingBase>
  );
}

const LoadingBase = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--vw, 1vw) * 100 - 230px);
  z-index: 10;
`;
