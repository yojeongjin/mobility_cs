import React from 'react';
import styled from 'styled-components';

//icons
import { BsDownload } from 'react-icons/bs';

export default function Search() {
  return (
    <SearchBox>
      <SearchContainer>
        <SearchDate></SearchDate>
        <SearchWrapper>
          <Select>
            <Option>(전체보기)</Option>
          </Select>
          <SearchInput />
          <SearchBtn>조회</SearchBtn>
        </SearchWrapper>
      </SearchContainer>
      <DownloadWrapper>
        <DownloadBtn>
          <DownloadIcon />
          엑셀 다운로드
        </DownloadBtn>
      </DownloadWrapper>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  display: flex;
  margin: 50px 0 35px;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const SearchDate = styled.div`
  width: 230px;
  border: 1px solid #aaa;
`;

const SearchWrapper = styled.div`
  width: 430px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  border: 1px solid #aaa;
`;

const Select = styled.select`
  width: 100px;
  height: 100%;
  border: none;
  border-right: 1px solid #aaa;
  color: #555;
  text-align: center;
`;

const Option = styled.option``;

const SearchInput = styled.input`
  width: 240px;
  height: 100%;
`;

const SearchBtn = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  width: 70px;
  height: 90%;
  color: #fff;
  border-radius: 2px;
`;

const DownloadWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  // align-items: flex-end;
  height: 100%;
  padding: 0 20px;
  color: #797979;
  &:hover {
    color: ${props => props.theme.fontColor};
  }
`;

const DownloadIcon = styled(BsDownload)`
  font-size: 16px;
  margin-right: 7px;
`;
