import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function TableComponent(props) {
  const { openPopup, inform, startPost, endPost, pageRange } = props;

  return (
    <TableBase>
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
          {inform.length === 0 ? (
            <TableBody>
              <TableRow>
                <StyledTableCell colSpan={6}>환불조회건이 없습니다.</StyledTableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {inform.slice(startPost - 1, endPost).map((info, idx) => {
                return (
                  <TableRow
                    key={info.id}
                    onClick={() => {
                      openPopup(info.id);
                    }}
                  >
                    <StyledTableCell>{inform.length - endPost + pageRange - idx}</StyledTableCell>
                    <StyledTableCell>{info.parkinglot_name}</StyledTableCell>
                    <StyledTableCell>{info.car_number}</StyledTableCell>
                    <StyledTableCell>
                      {dayjs(info.created_at).format('YYYY년 MM월 DD일 HH:mm')}
                    </StyledTableCell>
                    <StyledTableCell>
                      {info.refund_data_uri === '' ? '미제출' : '제출'}
                    </StyledTableCell>
                    <StyledTableCell>
                      {info.order_state === 'REFUNDED' ? (
                        <State isRefunded={info.order_state === 'REFUNDED'}>완료</State>
                      ) : (
                        <State isRefunded={info.order_state === 'REFUNDED'}>대기</State>
                      )}
                    </StyledTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </StyledTableContainer>
    </TableBase>
  );
}

const TableBase = styled.div`
  min-height: 500px;
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 480px;
  border-top: 1.5px solid #c8c8c8;
  // border-top: 1.5px solid black;
  padding: 3px 0;
`;

const StyledTableCellHead = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    background: #fbfbfb;
    border-bottom: 1px solid #ddd;
    color: #555;
    letter-spacing: -1px;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`;

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

const State = styled.div`
  background-color: ${props => (props.isRefunded ? '#dae9f4' : '#FE907E')};
  border-radius: 20px;
  width: 55px;
  text-align: center;
  padding: 5px 0;
  color: ${props => (props.isRefunded ? '#333' : '#fff')};
`;
