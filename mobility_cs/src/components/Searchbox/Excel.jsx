import React from 'react';
import XLSX from 'xlsx-js-style';
import dayjs from 'dayjs';

import styled from 'styled-components';
// icons
import { TfiDownload } from 'react-icons/tfi';

export default function Excel(props) {
  const { inform } = props;

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
    <ExcelBtn
      onClick={() => {
        XLSX.writeFile(wb, `${tableName}.xlsx`);
      }}
    >
      <ExcelIcon />
      다운로드
    </ExcelBtn>
  );
}

const ExcelIcon = styled(TfiDownload)`
  font-size: 15px;
  margin-right: 8px;
  font-size: 12px;
`;

const ExcelBtn = styled.button`
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 5px;
  color: #808080;
  border: 1px solid #dfe3e9;
  &:hover {
    background-color: #fafafa;
    color: ${props => props.theme.primaryDark};

    ${ExcelIcon} {
      color: ${props => props.theme.primaryDark};
    }
  }
`;
