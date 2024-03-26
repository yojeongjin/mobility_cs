import React from 'react';
import styled from 'styled-components';

// components
import SearchContainer from '../../container/Searchbox/SearchContainer';
import TableComponent from '../Table/TableComponent';

export default function MonthlyComponent(props) {
  const { openPopup, inform, startPost, endPost, pageRange } = props;

  return (
    <>
      <IllegalH1>월주차 현장요금 접수</IllegalH1>
      {/* 검색 */}
      <SearchContainer type={'MONTHLY'} />
      {/* Table */}
      <TableComponent
        openPopup={openPopup}
        inform={inform}
        startPost={startPost}
        endPost={endPost}
        pageRange={pageRange}
        type={'MONTHLY'}
      />
    </>
  );
}

const IllegalH1 = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: #333;
`;
