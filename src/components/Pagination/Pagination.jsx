import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Pagination(props) {
  const { btnRange, startPage, currentSet, page, setPage, endPage, totalSet } = props;

  return (
    <PaginationBase>
      <PaginationMenu>
        {currentSet !== undefined && currentSet > 1 && <PaginationItem>이전</PaginationItem>}
        {btnRange !== undefined &&
          Array(btnRange)
            .fill(startPage)
            .map((_, i) => (
              <PaginationItem
                isActive={page === startPage + i}
                onClick={() => setPage(startPage + i)}
              >
                {startPage + i}
              </PaginationItem>
            ))}
      </PaginationMenu>
    </PaginationBase>
  );
}

const PaginationBase = styled.div`
  // border: 1px solid black;
  margin: 30px 0 0;
  padding: 8px 0;
`;

const PaginationMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  // background: ${props => (props.isActive ? '#25d663' : 'none')};
  // border-radius: ${props => (props.isActive ? '50%' : '0')};
  color: ${props => (props.isActive ? '#25d663' : '#252525')};
  // font-size: ${props => (props.isActive ? '17px' : '14px')};

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: #fff;
    border-radius: 50%;
  }
`;
