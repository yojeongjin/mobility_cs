import React from 'react';
import styled from 'styled-components';
// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function IssuePopupComponent(props) {
  const { popupState, applyStatus, cmtRef } = props;

  return (
    <IllegalPopup>
      {/* 예약 내역 */}
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
                <StyledTableCell>환불사유</StyledTableCell>
                <StyledTableCell>{popupState.refund_user_reason}</StyledTableCell>
              </TableRow>

              {popupState.refund_state === '접수완료' ? (
                <StyledTableRow>
                  <StyledTableCell>비고</StyledTableCell>
                  <StyledTableCell>
                    <RemarkSpan>{popupState.refund_admin_comment}</RemarkSpan>
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                <StyledTableRow>
                  <StyledTableCell>비고</StyledTableCell>
                  <StyledTableCell>
                    <RemarkInput ref={cmtRef} />
                  </StyledTableCell>
                </StyledTableRow>
              )}
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

      <ApplyBtn
        disabled={popupState.refund_state === '접수완료'}
        onClick={() => {
          applyStatus();
        }}
      >
        처리 완료
      </ApplyBtn>
    </IllegalPopup>
  );
}

const IllegalPopup = styled.div`
  position: relative;
  width: 1000px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
`;

const ContentsTable = styled.div``;

const ApplyBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 50px;
  color: #fff;
  margin: 0 auto;
  font-size: 15px;
  &:disabled {
    background-color: #ececec;
    cursor: default;
  }
`;

// Table
const StyledTableCellHead = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    border-bottom: 1.5px solid black;
    height: 45px;
    letter-spacing: -1px;
  }
`;

const StyledTableRow = styled(TableRow)`
  && {
    background-color: #fbfbfb;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-family: 'Pretendard', sans-serif;
    height: 45px;
    color: ${props => props.theme.fontColor};
    border: none;
  }
`;

const RemarkInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 2px 10px;
  border: 1px solid #ececec;
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
