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
                <NoneTableCell colSpan={6}>검색 결과가 없습니다.</NoneTableCell>
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
                      {info.refund_data_uri === '' ? (
                        <Submit isSubmit={info.refund_data_uri === ''}>미제출</Submit>
                      ) : (
                        <Submit isSubmit={info.refund_data_uri === ''}>제출</Submit>
                      )}
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
  background-color: #fff;
  min-height: 480px;
`;

const StyledTableContainer = styled(TableContainer)`
  border-top: 1.5px solid #c8c8c8;
  padding: 3px 0;
`;

const StyledTableCellHead = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
    letter-spacing: -1px;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 40px;
    color: #333;
  }
  &:hover {
    cursor: pointer;
  }
`;

const NoneTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 200px;
    color: #333;
    text-align: center;
    border: none;
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
  background-color: ${props => (props.isRefunded ? '#EBF9EB' : '#FEF8E8')};
  border-radius: 15px;
  width: 57px;
  text-align: center;
  padding: 6px 0;
  color: ${props => (props.isRefunded ? '#2CC52C' : '#FCD051')};
`;

const Submit = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => (props.isSubmit ? '#fe907e' : '#66AEF9')};
  &:before {
    background-color: ${props => (props.isSubmit ? '#fe907e' : '#66AEF9')};
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 6px;
  }
`;
