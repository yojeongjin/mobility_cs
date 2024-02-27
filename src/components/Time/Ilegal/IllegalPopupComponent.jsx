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

export default function IllegalPopupComponent() {
  return (
    <IllegalPopup>
      <PopupContainer>
        {/* 증빙서류 */}
        <ReferenceImg>
          <ImgH2>증빙 서류</ImgH2>
          <ReferenceProcess>
            <AgreeCheck>
              <AgreeCheckInput type="checkbox" id="agree_receipt" name="agree_receipt" />
              <AgreeLabel htmlFor="agree_receipt">전체선택</AgreeLabel>
            </AgreeCheck>
            <ReferenDownload>다운로드</ReferenDownload>
          </ReferenceProcess>
          <SlideImgWrapper>
            <SlideImg src={`${process.env.PUBLIC_URL}/부정주차1.jpg`} alt="증빙사진" />
            <SlideImg src={`${process.env.PUBLIC_URL}/부정주차2.jpg`} alt="증빙사진" />
            <SlideImg src={`${process.env.PUBLIC_URL}/부정주차3.jpg`} alt="증빙사진" />
          </SlideImgWrapper>
        </ReferenceImg>
        <PopupContents>
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
                    <StyledTableCell>테스트로 이용불가 주차장</StyledTableCell>
                  </StyledTableRow>
                  <TableRow>
                    <StyledTableCell>차량번호</StyledTableCell>
                    <StyledTableCell>서울13마1234</StyledTableCell>
                  </TableRow>
                  <StyledTableRow>
                    <StyledTableCell>이용상품권</StyledTableCell>
                    <StyledTableCell>휴일당일권(토요일)</StyledTableCell>
                  </StyledTableRow>
                  <TableRow>
                    <StyledTableCell>예약 이용 일시</StyledTableCell>
                    <StyledTableCell>2024-12-15 (목) 11:50 ~ 13:50</StyledTableCell>
                  </TableRow>
                  <StyledTableRow>
                    <StyledTableCell>취소 사유</StyledTableCell>
                    <StyledTableCell>부정주차</StyledTableCell>
                  </StyledTableRow>
                  <TableRow>
                    <StyledTableCell>결제 일자</StyledTableCell>
                    <StyledTableCell>2024-12-15 11:14:33</StyledTableCell>
                  </TableRow>
                  <StyledTableRow>
                    <StyledTableCell>결제 금액</StyledTableCell>
                    <StyledTableCell>500 원</StyledTableCell>
                  </StyledTableRow>
                  <TableRow>
                    <StyledTableCell>결제 포인트</StyledTableCell>
                    <StyledTableCell>1,100 포인트</StyledTableCell>
                  </TableRow>
                  <StyledTableRow>
                    <StyledTableCell>총 결제 금액</StyledTableCell>
                    <StyledTableCell>1,600 원</StyledTableCell>
                  </StyledTableRow>
                  <TableRow>
                    <StyledTableCell style={{ fontWeight: 600 }}>처리자</StyledTableCell>
                    <StyledTableCell style={{ fontWeight: 600 }}>toy9900</StyledTableCell>
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
                    <RefundTableCell>500 원</RefundTableCell>
                    <RefundTableCell>1,100 포인트</RefundTableCell>
                    <RefundTableCell>
                      <Select>
                        <Option>100%</Option>
                        <Option>80%</Option>
                      </Select>
                    </RefundTableCell>
                  </TableRow>
                  <TableRow>
                    <RefundTableCell colSpan={3}>
                      <RemarkLabel>비고</RemarkLabel>
                      <RemarkInput />
                    </RefundTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </RefundTable>
          <BtnDiv>
            <RefundBtn>환불하기</RefundBtn>
          </BtnDiv>
        </PopupContents>
      </PopupContainer>
    </IllegalPopup>
  );
}

const IllegalPopup = styled.div`
  width: 1400px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
`;

const PopupContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PopupContents = styled.div`
  // border: 1px solid orange;
  flex: 1;
  // height: 100%;
`;

const ContentsTable = styled.div`
  // border: 1px solid orange;

  // height: 90%;
`;

const RefundTable = styled.div`
  // border: 1px solid pink;
  margin: 30px 0 10px;
  // height: 10%;
`;

export const Select = styled.select`
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

export const Option = styled.option``;

const RemarkLabel = styled.label`
  margin-right: 10px;
`;
const RemarkInput = styled.input`
  border: 1px solid #ddd;
  width: 80%;
  height: 100%;
  padding: 0 10px;
`;

const BtnDiv = styled.div`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0 0;
`;

const RefundBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  height: 50px;
  color: #fff;
  padding: 0 15px;
  font-size: 15px;
`;

const ReferenceImg = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 20px;
`;

const ImgH2 = styled.h2`
  background-color: ${props => props.theme.secondaryColor};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
`;

const SlideImgWrapper = styled.div`
  height: 86%;
  overflow-y: scroll;
`;

const SlideImg = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 15px;
  &:last-child {
    margin: 0 0;
  }
`;

const ReferenceProcess = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const AgreeCheck = styled.div`
  display: flex;
  align-items: center;
`;

const ReferenDownload = styled.div``;

const AgreeCheckInput = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid #a0a0a0;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  &:checked {
    background-color: ${props => props.theme.primaryColor};
    border-color: transparent;
    background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'><polyline points='20 6 9 17 4 12'></polyline></svg>");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const AgreeLabel = styled.label`
  cursor: pointer;
`;

// Table
const StyledTableCellHead = styled(TableCell)`
  && {
    background-color: ${props => props.theme.secondaryColor};
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    // border-bottom: 1px solid #ddd;
    height: 45px;
    color: #fff;
    letter-spacing: -1px;
    border: none;
  }
`;

const StyledTableRow = styled(TableRow)`
  && {
    // background-color: ${props => props.theme.primaryLight};
    background-color: #fafafa;
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
    background-color: ${props => props.theme.secondaryColor};
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    height: 45px;
    color: #fff;
    letter-spacing: -1px;
    text-align: center;
    border: none;
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
