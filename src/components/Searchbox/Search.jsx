import React from 'react';
import styled from 'styled-components';

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
          <CalendarDate>2024. 02. 26 - 2024. 02. 26</CalendarDate>
        </SearchDate>
        <SearchInput>
          <Input />
          <SearchIcon />
        </SearchInput>
      </SearchBox>

      <DownloadBtn>
        <DownloadIcon /> 엑셀 다운로드
      </DownloadBtn>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 38px;
  margin: 0 0 8px;
`;

const SearchBox = styled.div`
  display: flex;
`;

const SearchDate = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
  border: 1px solid #555;
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
  color: #555;
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
  margin-left: 15px;
`;

const Input = styled.input`
  width: 150px;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #555;
  border-radius: 5px;
  transition: width 0.4s;
  &:focus {
    border: 1px solid #669900;
    width: 250px;
  }
`;

const SearchIcon = styled(IoSearchSharp)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  transition: 0.4s;
  color: #757575;
`;

const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  color: #575757;
  &:hover {
    color: ${props => props.theme.fontColor};
  }
`;

const DownloadIcon = styled(SiMicrosoftexcel)`
  font-size: 15px;
  margin-right: 5px;
  color: ${props => props.theme.primaryDark};
`;
