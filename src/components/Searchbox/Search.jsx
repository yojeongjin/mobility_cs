import React from 'react';
import styled from 'styled-components';

import Calendar from './Calendar';

//icons
import { IoSearchSharp, IoCalendarNumberOutline } from 'react-icons/io5';
import { SiMicrosoftexcel } from 'react-icons/si';

export default function Search() {
  return (
    <SearchContainer>
      {/* 달력 및 검색창 */}
      <SearchBox>
        <SearchDate>
          <IconDiv>
            <CalendarIcon />
          </IconDiv>
          <CalendarDate>
            <Calendar />
          </CalendarDate>
        </SearchDate>
        <SearchInput>
          <SearchIcon />
          <Input placeholder="차량번호 입력" />
        </SearchInput>
        <SearchButton>검색</SearchButton>
      </SearchBox>

      {/* <DownloadBtn>
        <DownloadIcon /> 엑셀 다운로드
      </DownloadBtn> */}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  height: 38px;
  margin: 0 0 20px;
`;

const SearchBox = styled.div`
  display: flex;
`;

const SearchDate = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 12px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  cursor: pointer;
  color: #555;
`;

const IconDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const CalendarIcon = styled(IoCalendarNumberOutline)`
  font-size: 18px;
  // color: #669900;
  color: #555;
  // color: ${props => props.theme.primaryDark};
`;

const CalendarDate = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  height: 100%;
  padding-left: 10px;
`;

const SearchInput = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 15px;
  padding: 0 10px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
`;

const SearchIcon = styled(IoSearchSharp)`
  color: #858585;
`;

const Input = styled.input`
  width: 150px;
  height: 100%;
  margin-left: 10px;
  padding: 0 10px;
  // border-left: 1px solid #c8c8c8;
  transition: width 0.4s;
  &:focus {
    border: 1px solid #669900;
    width: 250px;
  }
`;

const SearchButton = styled.button`
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  padding: 10px;
`;

const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  // color: #575757;
  color: #757575;
  &:hover {
    color: ${props => props.theme.fontColor};
  }
`;

const DownloadIcon = styled(SiMicrosoftexcel)`
  font-size: 15px;
  margin-right: 5px;
  color: ${props => props.theme.primaryDark};
`;
