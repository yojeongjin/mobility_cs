import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

import { IoSearchSharp, IoCalendarNumberOutline } from 'react-icons/io5';

export default function Search1() {
  return (
    <SearchContainer>
      <SearchBox>
        <DateWrapper>
          <Calendar />
          <DateButtonWrapper>
            <DateButton>오늘</DateButton>
            <DateButton>15일</DateButton>
            <DateButton>1개월</DateButton>
          </DateButtonWrapper>
        </DateWrapper>
      </SearchBox>
      <SearchBox>
        <SearchInput>
          <InputLabel htmlFor="searchInput">
            <SearchIcon />
          </InputLabel>
          <Input id="searchInput" />
          <SearchBtn>검색</SearchBtn>
        </SearchInput>
      </SearchBox>
      {/* <SearchBtnWrapper>
        <SearchBtn>검색</SearchBtn>
      </SearchBtnWrapper> */}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  margin: 50px 0 20px;
`;

const SearchBox = styled.div`
  margin-right: 20px;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const DateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const DateButton = styled.button`
  border-right: 1px solid #e0e0e0;
  padding: 10px 17px;
  color: #555;
  font-weight: 300;
  &:last-child {
    border-right: none;
  }
  &:hover {
    color: ${props => props.theme.secondaryColor};
    font-weight: 500;
  }
`;

const SearchInput = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const InputLabel = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const SearchIcon = styled(IoSearchSharp)`
  color: #858585;
`;

const Input = styled.input`
  width: 200px;
  height: 100%;
  margin-left: 10px;
  transition: width 0.4s;
  &:focus {
    // border: 1px solid #669900;
    width: 250px;
  }
`;

const SearchBtn = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  height: 100%;
  color: #fff;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
`;
