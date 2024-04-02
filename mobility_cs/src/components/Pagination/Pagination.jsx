import React from 'react';
import styled from 'styled-components';

export default function Pagination(props) {
  const { totalPage, endPage, totalSet, btnRange, startPage, currentSet, page, changePage } = props;

  return (
    <PaginationBase>
      <PaginationMenu>
        {currentSet !== undefined && currentSet > 1 && currentSet !== Infinity && (
          <PaginationItem onClick={() => changePage(startPage - 1)}>＜</PaginationItem>
        )}
        {btnRange !== undefined &&
          Array(btnRange)
            .fill(startPage)
            .map(
              (_, i) =>
                startPage + i <= totalPage && (
                  <PaginationItem
                    isActive={page === startPage + i}
                    onClick={() => changePage(startPage + i)}
                  >
                    {startPage + i}
                  </PaginationItem>
                ),
            )}
        {totalSet > currentSet && currentSet !== Infinity && (
          <PaginationItem onClick={() => changePage(endPage + 1)}>＞</PaginationItem>
        )}
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
  margin-right: 15px;
  cursor: pointer;
  color: ${props => (props.isActive ? '#02ca2d' : '#c6c6c6')};

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: #fff;
    border-radius: 50%;
  }
`;
