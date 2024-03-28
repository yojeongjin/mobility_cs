import React from 'react';
import styled from 'styled-components';

// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function PopupTableComponent(props) {
  const { cmtRef, popupState, calculedFee, calculedPoint, setRate, rates } = props;

  return (
    <>
      <ContentsTable>
        <TableContainer>
          <Table size="small">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <StyledTableCellHead>분류</StyledTableCellHead>
                <StyledTableCellHead>내용</StyledTableCellHead>
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>현장명</StyledTableCell>
                <StyledTableCell>{popupState.parkinglot_name}</StyledTableCell>
              </StyledTableRow>
              <TableRow>
                <StyledTableCell>차량번호</StyledTableCell>
                <StyledTableCell>{popupState.car_number}</StyledTableCell>
              </TableRow>
              <StyledTableRow>
                <StyledTableCell>이용상품권</StyledTableCell>
                <StyledTableCell>{popupState.parkingitem_name}</StyledTableCell>
              </StyledTableRow>
              <TableRow>
                <StyledTableCell>예약 이용 일시</StyledTableCell>
                <StyledTableCell>
                  {popupState.reservation_from} ~ {popupState.reservation_to}
                </StyledTableCell>
              </TableRow>
              <StyledTableRow>
                <StyledTableCell>취소 사유</StyledTableCell>
                <StyledTableCell>{popupState.refund_reason}</StyledTableCell>
              </StyledTableRow>
              <TableRow>
                <StyledTableCell>결제 일자</StyledTableCell>
                <StyledTableCell>{popupState.paid_at}</StyledTableCell>
              </TableRow>
              <StyledTableRow>
                <StyledTableCell>결제 금액</StyledTableCell>
                <StyledTableCell>{popupState.payment_amount} 원</StyledTableCell>
              </StyledTableRow>
              <TableRow>
                <StyledTableCell>결제 포인트</StyledTableCell>
                <StyledTableCell>{popupState.point_amount} 포인트</StyledTableCell>
              </TableRow>
              <StyledTableRow>
                <StyledTableCell>총 결제 금액</StyledTableCell>
                <StyledTableCell>{popupState.total_amount} 원</StyledTableCell>
              </StyledTableRow>
              <TableRow>
                <StyledTableCell style={{ fontWeight: 600 }}>처리자</StyledTableCell>
                <StyledTableCell style={{ fontWeight: 600 }}>
                  {popupState.admin_userid}
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ContentsTable>
      {/* 환불 */}
      <RefundTable>
        <TableContainer>
          <Table size="small">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <RefundTableHead>환불 금액</RefundTableHead>
                <RefundTableHead>환불 포인트</RefundTableHead>
                <RefundTableHead>환불 비율</RefundTableHead>
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              <TableRow>
                <RefundTableCell>{calculedFee} 원</RefundTableCell>
                <RefundTableCell>{calculedPoint} 포인트</RefundTableCell>
                <RefundTableCell>
                  <Select
                    onChange={e => {
                      setRate(e.target.value);
                    }}
                  >
                    {rates.map((rate, idx) => (
                      <Option key={idx}>{rate}</Option>
                    ))}
                  </Select>
                </RefundTableCell>
              </TableRow>
              <TableRow>
                <RefundTableCell colSpan={3}>
                  {popupState.order_state === 'REFUNDED' ? (
                    <Remark>
                      <RemarkLabel>비고</RemarkLabel>
                      <RemarkSpan>{popupState.refund_admin_comment}</RemarkSpan>
                    </Remark>
                  ) : (
                    <>
                      <RemarkLabel>비고</RemarkLabel>
                      <RemarkInput ref={cmtRef} />
                    </>
                  )}
                </RefundTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </RefundTable>
    </>
  );
}

const ContentsTable = styled.div``;
const RefundTable = styled.div`
  margin: 30px 0 10px;
`;

const Select = styled.select`
  width: 80px;
  height: 100%;
  padding: 0 9px;
  letter-spacing: -0.5px;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #555;
  &:hover {
    cursor: pointer;
  }
`;
const Option = styled.option``;

const RemarkLabel = styled.label`
  margin-right: 10px;
`;
const RemarkInput = styled.input`
  border: 1px solid #ddd;
  width: 80%;
  height: 100%;
  padding: 0 10px;
`;

const Remark = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin-top: 5px;
`;

const RemarkSpan = styled.span`
  background: #fbfbfb;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 1px solid #ececec;
`;

// Table
const StyledTableCellHead = styled(TableCell)`
  && {
    // background-color: ${props => props.theme.secondaryColor};
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    border-bottom: 1.5px solid black;
    height: 45px;
    // color: #fff;
    letter-spacing: -1px;
    // border: none;
  }
`;

const StyledTableRow = styled(TableRow)`
  && {
    // background-color: ${props => props.theme.primaryLight};\
    // background-color: #f8faff;
    background-color: #fbfbfb;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 45px;
    color: ${props => props.theme.fontColor};
    // color: ${props => (props.isSubject ? '#aaa' : '#252525')};
    border: none;
  }
`;

const RefundTableHead = styled(TableCell)`
  && {
    // background-color: ${props => props.theme.secondaryColor};
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    height: 45px;
    // color: #fff;
    letter-spacing: -1px;
    text-align: center;
    // border: none;
    border-bottom: 1.5px solid black;
  }
`;

const RefundTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 45px;
    color: ${props => props.theme.fontColor};
    border: none;
    text-align: center;
  }
`;
