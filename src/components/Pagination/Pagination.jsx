import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Pagination() {
  return (
    <PaginationBase>
      <PaginationMenu>
        <PaginationItem>
          <PaginationLink>이전</PaginationLink>
        </PaginationItem>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>
          <PaginationLink>다음</PaginationLink>
        </PaginationItem>
      </PaginationMenu>
    </PaginationBase>
  );
}

const PaginationBase = styled.div`
  // border: 1px solid black;
  margin: 50px 0 0;
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
  &:first-child {
    &::before {
      content: '＜';
      margin-right: 8px;
    }
  }
  &:last-child {
    &::after {
      content: '＞';
      margin-left: 8px;
    }
    margin-right: 0;
  }
  &:first-child,
  &:last-child {
    width: 50px;
    font-size: 15px;
    &:hover {
      border: none;
      background: none;
      color: ${props => props.theme.fontColor};
    }
  }
  &:hover {
    background: ${props => props.theme.primaryColor};
    // background: #669900;
    // background: ${props => props.theme.primaryDark};
    color: #fff;
    border-radius: 50%;
  }
`;

const PaginationLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
