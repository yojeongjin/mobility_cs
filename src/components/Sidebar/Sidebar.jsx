import React from 'react';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/modules/auth';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

//icons
import { VscSignOut } from 'react-icons/vsc';

export default function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = location.pathname.split('/')[3];

  if (location.pathname === '/signin') return null;
  if (location.pathname === `/illegal/popup/${params}`) return null;
  if (location.pathname === `/charge/popup/${params}`) return null;
  if (location.pathname === `/another/popup/${params}`) return null;
  if (location.pathname === `/issue/popup/${params}`) return null;

  const logout = () => {
    dispatch(signout());
  };

  return (
    <SidebarBase>
      <Inner>
        <Link to="/">
          <LogoDiv>
            <Logo src={`${process.env.PUBLIC_URL}/logo.png`} alt="로고" />
          </LogoDiv>
        </Link>
        <SideMenu>
          <MenuItem>
            <ItemH2>공유주차</ItemH2>
            <SubMenu>
              <Link to="/">
                <SubItem isLocation={location.pathname === '/'}>부정주차</SubItem>
              </Link>
              <Link to="/another">
                <SubItem isLocation={location.pathname === '/another'}>공사중·삭선</SubItem>
              </Link>
            </SubMenu>
          </MenuItem>

          <MenuItem>
            <ItemH2>당일권</ItemH2>
            <SubMenu>
              <Link to="/charge">
                <SubItem isLocation={location.pathname === '/charge'}>현장요금</SubItem>
              </Link>
              <Link to="/issue">
                <SubItem isLocation={location.pathname === '/issue'}>만차·현장이슈</SubItem>
              </Link>
            </SubMenu>
          </MenuItem>

          <MenuItem>
            <ItemH2>월주차</ItemH2>
            <SubMenu>
              <Link to="/monthly">
                <SubItem isLocation={location.pathname === '/monthly'}>월주차 현장요금</SubItem>
              </Link>
            </SubMenu>
          </MenuItem>
        </SideMenu>

        <BtnDiv>
          <SignoutBtn
            onClick={() => {
              logout();
            }}
          >
            Logout
            <SignOutIcon />
          </SignoutBtn>
        </BtnDiv>
      </Inner>
    </SidebarBase>
  );
}

const SidebarBase = styled.div`
  background-color: ${props => props.theme.fontColor};
  position: fixed;
  top: 0;
  bottom: 0;
  width: 230px;
  height: 100%;
`;

const Inner = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
`;

const LogoDiv = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
`;

const SideMenu = styled.ul`
  height: 70%;
  color: #fff;
`;

const MenuItem = styled.li`
  margin: 20px 20px 15px;
  padding: 20px 10px 0;
  &:first-child {
    padding-top: 30px;
  }
`;

const ItemH2 = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const SubMenu = styled.ul``;

const SubItem = styled.li`
  padding: 8px 0;
  color: ${props => (props.isLocation ? '#02ca2d' : '#aaa')};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
  }
`;

const BtnDiv = styled.div`
  height: 15%;
  padding-top: 20px;
`;

const SignOutIcon = styled(VscSignOut)`
  font-size: 15px;
  margin-left: 10px;
`;

const SignoutBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 11px 0;
  font-size: 13px;
  border-radius: 15px;
  color: #e0e0e0;
  &:hover {
    color: #fff;
    ${SignOutIcon} {
      color: ${props => props.theme.primaryColor};
    }
  }
`;
