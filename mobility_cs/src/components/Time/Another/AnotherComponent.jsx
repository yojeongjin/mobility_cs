import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../../../container/Searchbox/SearchContainer';
import TableComponent from '../../Table/TableComponent';

export default function AnotherComponent(props) {
  const { openPopup, inform, startPost, endPost, pageRange } = props;

  return (
    <>
      <IllegalH1>공사중·삭선 접수</IllegalH1>
      <SearchContainer inform={inform} type={'TIME'} />
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
