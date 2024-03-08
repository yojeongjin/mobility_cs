import React from 'react';
import styled from 'styled-components';
// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Pagination from '../../Pagination/Pagination';
import Search from '../../Searchbox/Search';

export default function IllegalComponent(props) {
  const { openPopup } = props;
  return (
    <>
      <IllegalH1>부정주차 접수</IllegalH1>
      <IllegalP>부정주차 설명 부정주차 설명 부정주차 설명 부정주차 설명</IllegalP>
      {/* 검색 */}

      {/* Table */}
      <TableBase>
        <Search />
        <StyledTableContainer>
          <Table size="small">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <StyledTableCellHead>No.</StyledTableCellHead>
                <StyledTableCellHead>주차장명</StyledTableCellHead>
                <StyledTableCellHead>차량정보</StyledTableCellHead>
                <StyledTableCellHead>업로드시간</StyledTableCellHead>
                <StyledTableCellHead>증빙서류</StyledTableCellHead>
                <StyledTableCellHead>상태</StyledTableCellHead>
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              <TableRow
                onClick={() => {
                  openPopup();
                }}
              >
                <StyledTableCell>3</StyledTableCell>
                <StyledTableCell>결제하면 안되는 테스트 주차장</StyledTableCell>
                <StyledTableCell>서울13마1234</StyledTableCell>
                <StyledTableCell>2024년 02월 06일 (화) 11:40</StyledTableCell>
                <StyledTableCell>미제출</StyledTableCell>
                <StyledTableCell>
                  <ParkingState>환불대기</ParkingState>
                </StyledTableCell>
              </TableRow>
              <TableRow
                onClick={() => {
                  openPopup();
                }}
              >
                <StyledTableCell>2</StyledTableCell>
                <StyledTableCell>파프테스트 주차장</StyledTableCell>
                <StyledTableCell>123가1234</StyledTableCell>
                <StyledTableCell>2024년 02월 06일 (화) 11:40</StyledTableCell>
                <StyledTableCell>제출</StyledTableCell>

                <StyledTableCell>
                  <ParkingState>환불대기</ParkingState>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>1</StyledTableCell>
                <StyledTableCell>테스트로 이용불가 주차장</StyledTableCell>
                <StyledTableCell>123가1234</StyledTableCell>
                <StyledTableCell>2024년 01월 29일 (금) 23:21</StyledTableCell>
                <StyledTableCell>만료</StyledTableCell>

                <StyledTableCell>
                  <State>환불완료</State>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableBase>
      <Pagination />
    </>
  );
}

const IllegalH1 = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: #333;
  letter-spacing: -0.5px;
`;

const IllegalP = styled.p`
  padding: 10px 0;
  margin-bottom: 50px;
  color: #aaa;
  font-weight: 300;
  letter-spacing: -1px;
`;

const TableBase = styled.div`
  min-height: 550px;
  // border-bottom: 1px solid #f0f0f0;
  // border: 1px solid purple;
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 500px;
  border-top: 1.5px solid black;
  padding: 3px 0;
`;

const StyledTableCellHead = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
    color: #555;
    // text-align: center;
    letter-spacing: -1px;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    // text-align: center;
    height: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Select = styled.select`
  // width: 100px;
  height: 30px;
  padding: 0 9px;
  letter-spacing: -0.5px;
  border: 1px solid #ddd;
  color: #555;
`;

export const Option = styled.option``;

export const ApplyBtn = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 2px;
  color: ${props => props.theme.primaryColor};
  &:hover {
    color: #2f2f37;
    border: 1px solid #2f2f37;
  }
`;

const ParkingState = styled.div`
  background-color: #ff7761;
  border-radius: 20px;
  width: 70px;
  text-align: center;
  padding: 4px 0;
  color: #fff;
`;

const State = styled.div`
  background-color: #dae9f4;
  border-radius: 20px;
  width: 70px;
  text-align: center;
  padding: 5px 0;
  color: #333;
`;
