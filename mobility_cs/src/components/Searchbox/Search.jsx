import React from 'react';
import styled from 'styled-components';

// components
import CalendarContainer from '../../container/Searchbox/CalendarContainer';
// icon
import { IoSearchSharp } from 'react-icons/io5';

export default function Search(props) {
  const { carNumRef, searchInfo, handleOnKeyPress } = props;

  return (
    <SearchContainer>
      <SearchBox>
        <CalendarContainer />
      </SearchBox>
      <SearchBox>
        <SearchInput>
          <InputLabel htmlFor="searchInput">
            <SearchIcon />
          </InputLabel>
          <Input id="searchInput" ref={carNumRef} onKeyDown={handleOnKeyPress} />
          <SearchBtn
            onClick={() => {
              searchInfo();
            }}
          >
            검색
          </SearchBtn>
        </SearchInput>
      </SearchBox>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 1300px;
  margin: 30px 0 0;
`;

const SearchBox = styled.div`
  display: flex;
  margin-right: 20px;
`;

const SearchInput = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid #e0e1e4;
  border-radius: 5px;
`;

const InputLabel = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const SearchIcon = styled(IoSearchSharp)`
  color: #858585;
`;

const Input = styled.input`
  width: 200px;
  height: 100%;
  margin-left: 10px;
  transition: width 0.4s;
`;

const SearchBtn = styled.button`
  // background-color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
  height: 105%;
  color: #fff;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`;
