import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

// material-ui
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export default function TableComponent(props) {
  const { openPopup, inform, startPost, endPost, pageRange, type } = props;

  return (
    <TableBase>
      <StyledTableContainer>
        <Grid>
          <Table size="small">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <StyledTableCellHead>No.</StyledTableCellHead>
                <StyledTableCellHead>주차장명</StyledTableCellHead>
                <StyledTableCellHead>차량정보</StyledTableCellHead>
                <StyledTableCellHead>업로드시간</StyledTableCellHead>
                {/* {type === 'TIME' ? <StyledTableCellHead>증빙서류</StyledTableCellHead> : null} */}
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
                    <StyledTableRow
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
                      {/* {type === 'TIME' ? (
                      <StyledTableCell>
                        {info.refund_data_uri === '' ? (
                          <Submit>
                            <SubmitLabel isSubmit={info.refund_data_uri === ''}>미제출</SubmitLabel>
                          </Submit>
                        ) : (
                          <Submit>
                            <SubmitLabel isSubmit={info.refund_data_uri === ''}>제출</SubmitLabel>
                          </Submit>
                        )}
                      </StyledTableCell>
                    ) : null} */}

                      {type === 'TIME' ? (
                        <StyledTableCell>
                          {info.order_state === 'REFUNDED' ? (
                            <State>
                              <StateLabel isRefunded={info.order_state === 'REFUNDED'}>
                                완료
                              </StateLabel>
                            </State>
                          ) : (
                            <State>
                              <StateLabel isRefunded={info.order_state === 'REFUNDED'}>
                                대기
                              </StateLabel>
                            </State>
                          )}
                        </StyledTableCell>
                      ) : (
                        <StyledTableCell>
                          {info.refund_state === '접수완료' ? (
                            <State>
                              <StateLabel isRefunded={info.refund_state === '접수완료'}>
                                완료
                              </StateLabel>
                            </State>
                          ) : (
                            <State>
                              <StateLabel isRefunded={info.refund_state === '접수완료'}>
                                대기
                              </StateLabel>
                            </State>
                          )}
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </Grid>
      </StyledTableContainer>
    </TableBase>
  );
}

const TableBase = styled.div`
  min-height: 500px;
  // border: 1px solid black;
`;

const StyledTableContainer = styled(TableContainer)`
  border-top: 1px solid ${props => props.theme.secondaryColor};
`;

const StyledTableCellHead = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    height: 50px;
    letter-spacing: -0.5px;
    border-bottom: 1px solid #dfe3e9;
  }
`;

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: #f9fcfd;
    cursor: pointer;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 48px;
    color: #333;
    border-bottom: 1px solid #ebecf0;
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
  width: 100%;
  // display: flex;
  // justify-content: center;
`;

const StateLabel = styled.div`
  background-color: ${props => (props.isRefunded ? '#EBF9EB' : '#FEF8E8')};
  border-radius: 15px;
  width: 57px;
  text-align: center;
  padding: 6px 0;
  color: ${props => (props.isRefunded ? '#2CC52C' : '#ff7761')};
`;
