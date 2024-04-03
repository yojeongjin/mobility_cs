import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
// excel
import XLSX from 'xlsx-js-style';
// components
import CalendarContainer from '../../container/Searchbox/CalendarContainer';
// icon
import { IoSearchSharp } from 'react-icons/io5';
import { SiMicrosoftexcel } from 'react-icons/si';

export default function Search(props) {
  const { carNumRef, searchInfo, handleOnKeyPress, inform } = props;
  // excel data
  const arr = inform.map(info => ({
    주차장명: info.parkinglot_name,
    차량정보: info.car_number,
    이용상품권: info.parkingitem_name,
    취소사유: info.refund_reason,
    결제일시: info.paid_at,
    결제금액: info.payment_amount,
    결제포인트: info.point_amount,
    총결제금액: info.total_amount,
    상태: info.refund_state,
  }));
  const ws = XLSX.utils.json_to_sheet(arr);
  const wb = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  const tableName = dayjs(new Date()).format('YYMMDD');
  return (
    <SearchContainer>
      <SearchBox>
        <CalendarContainer />
        <SearchInput>
          <InputLabel htmlFor="searchInput">
            <SearchIcon />
          </InputLabel>
          <Input id="searchInput" ref={carNumRef} onKeyDown={handleOnKeyPress} />
          <SearchBtn
            onClick={() => {
              searchInfo();
            }}
          >
            검색
          </SearchBtn>
        </SearchInput>
      </SearchBox>

      <DownloadBox
        onClick={() => {
          XLSX.writeFile(wb, `${tableName}.xlsx`);
        }}
      >
        <IconWrapper>
          <ExcelIcon />
        </IconWrapper>

        <SpanWarpper>
          <DownloadSpan>다운로드</DownloadSpan>
        </SpanWarpper>
      </DownloadBox>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 15px;
`;

const SearchBox = styled.div`
  display: flex;
  margin-right: 20px;
`;

const SearchInput = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 14px;
  border: 1px solid #e0e1e4;
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
  // transition: width 0.4s;
`;

const SearchBtn = styled.button`
  // background-color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
  height: 102%;
  color: #fff;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`;

const SpanWarpper = styled.div`
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  align-items: center;
  // border: 1px solid orange;
  padding: 0 8px;
  border-radius: 0 10px 10px 0;
  color: #fff;
  transition: all 0.9s ease;
  opacity: 0;
`;

const DownloadSpan = styled.span``;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ExcelIcon = styled(SiMicrosoftexcel)`
  color: ${props => props.theme.primaryDark};
`;

const DownloadBox = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 500ms;
  transform: translateX(65px);
  &:hover {
    transform: translateX(0px);
    ${SpanWarpper} {
      opacity: 1;
    }
    ${IconWrapper} {
      border-radius: 10px 0 0 10px;
    }
  }
`;
