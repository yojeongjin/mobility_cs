import React from 'react';
import styled from 'styled-components';
// material-ui
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

// components
import Main from '../Main/Main';
import Search from '../Searchbox/Search';

export default function IllegalComponent() {
  return (
    <Main>
      <IllegalH1>부정주차 접수</IllegalH1>
      <IllegalP>부정주차 설명 부정주차 설명 부정주차 설명 부정주차 설명</IllegalP>
      {/* 검색 */}
      <Search />
      {/* Table */}
      <TableBase>
        <StyledTableContainer>
          <Table size="small">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <StyledTableCellHead>No.</StyledTableCellHead>
                <StyledTableCellHead>현장명</StyledTableCellHead>
                <StyledTableCellHead>차량정보</StyledTableCellHead>
                <StyledTableCellHead>업로드시간</StyledTableCellHead>
                <StyledTableCellHead colSpan={2}>환불선택</StyledTableCellHead>
                <StyledTableCellHead>상태</StyledTableCellHead>
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              <TableRow>
                <StyledTableCell>1</StyledTableCell>
                <StyledTableCell>파프테스트 주차장</StyledTableCell>
                <StyledTableCell>123가1234</StyledTableCell>
                <StyledTableCell>2024년 01월 29일 (금)</StyledTableCell>
                <StyledTableCell rowSpan={2} style={{ width: '100px' }}>
                  <Select>
                    <Option>100%</Option>
                    <Option>50%</Option>
                  </Select>
                </StyledTableCell>

                <StyledTableCell rowSpan={2} align="left" style={{ width: '100px' }}>
                  <ApplyBtn>적용</ApplyBtn>
                </StyledTableCell>
                <StyledTableCell>환불완료</StyledTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <StyledTableCell>1</StyledTableCell>
                <StyledTableCell>파프테스트 주차장</StyledTableCell>
                <StyledTableCell>123가1234</StyledTableCell>
                <StyledTableCell>2024년 01월 29일 (금)</StyledTableCell>
                <StyledTableCell rowSpan={2} style={{ width: '100px' }}>
                  <Select>
                    <Option>100%</Option>
                    <Option>50%</Option>
                  </Select>
                </StyledTableCell>

                <StyledTableCell rowSpan={2} align="left" style={{ width: '100px' }}>
                  <ApplyBtn>적용</ApplyBtn>
                </StyledTableCell>
                <StyledTableCell>환불완료</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableBase>
    </Main>
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
  color: #aaa;
  font-weight: 300;
  letter-spacing: -1px;
`;

const TableBase = styled.div``;

const StyledTableContainer = styled(TableContainer)`
  max-height: 450px;
  border-top: 1.5px solid black;
  padding: 3px 0;
`;

const StyledTableCellHead = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
    color: #555;
    text-align: center;
    letter-spacing: -1px;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    text-align: center;
    height: 40px;
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
