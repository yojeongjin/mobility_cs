import React from 'react';
import styled from 'styled-components';

// components
import SearchContainer from '../../../container/Searchbox/SearchContainer';
import TableComponent from '../../Table/TableComponent';

export default function IllegalComponent(props) {
  const { openPopup, totalInfo, startPost, endPost, pageRange } = props;

  const inform = totalInfo.filter(info => info.refund_reason === '부정주차');

  return (
    <>
      <IllegalH1>부정주차 접수</IllegalH1>
      {/* 검색 */}
      <SearchContainer type={'TIME'} />
      {/* Table */}
      <TableComponent
        openPopup={openPopup}
        inform={inform}
        startPost={startPost}
        endPost={endPost}
        pageRange={pageRange}
        type={'TIME'}
      />
    </>
  );
}

const IllegalH1 = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: #333;
`;
