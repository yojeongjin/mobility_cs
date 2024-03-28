import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// icons
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';

export default function SigninComponent(props) {
  const { login } = props;

  const idRef = useRef(null);
  const pwRef = useRef(null);
  const [pw, setPw] = useState(null);

  const signinHandler = () => {
    const id = idRef.current.value;
    const pw = pwRef.current.value;

    let body = {
      admin_userid: id,
      admin_password: pw,
    };
    login(body);
  };

  const handleOnKyePress = e => {
    if (e.key === 'Enter') {
      signinHandler();
    }
  };

  return (
    <SigninBase>
      <SigninContents>
        <LogoImg src={`${process.env.PUBLIC_URL}/logo.png`} alt="로고" />
        {/* id input */}
        <InputWrapper>
          <InputLabel htmlFor="idInput">
            <Input id="idInput" type="text" required placeholder="&nbsp;" ref={idRef} />
            <InputSpan>
              <IdIcon />
              아이디를 입력해주세요.
            </InputSpan>
          </InputLabel>
        </InputWrapper>
        {/* pw input */}
        <InputWrapper>
          <InputLabel htmlFor="pwInput">
            <Input
              id="pwInput"
              type="password"
              required
              placeholder="&nbsp;"
              ref={pwRef}
              onChange={e => setPw(e.target.value)}
              onKeyDown={e => handleOnKyePress(e)}
            />
            <InputSpan>
              <PwIcon />
              비밀번호를 입력해주세요.
            </InputSpan>
          </InputLabel>
        </InputWrapper>
        {/* button */}
        <SigninBtn
          disabled={pw === null || pw === ''}
          onClick={() => {
            signinHandler();
          }}
        >
          로그인
        </SigninBtn>
      </SigninContents>
    </SigninBase>
  );
}

const SigninBase = styled.main`
  max-width: 450px;
  min-width: 280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const SigninContents = styled.article`
  height: 100%;
  padding: 0 40px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

const InputLabel = styled.label`
  position: relative;
  margin: 0 auto;
  width: 300px;
`;

const InputSpan = styled.span`
  background-color: #fff;
  position: absolute;
  top: 11px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 5px 15px;
  transform-origin: 0 0;
  transition: all 0.2s ease;
  color: #a9a9a9;
  cursor: text;
`;

const Input = styled.input`
width: 100%;
max-width: 300px;
min-width: 230px;
height: 48px;
padding: 16px;
transition: all .15s ease;
border: 1px solid #e0e0e0;
border-radius: 8px;
&:not(:placeholder-shown){
  + ${InputSpan} {
    color #5A667F;
    transform: translateY(-20px) scale(.9);
  }
}
&:focus{
  background: none;
  outline: none;
  border: 1px solid #797979;
  + ${InputSpan} {
    color: #0077FF;
    transform: translateY(-20px) scale(.9);
    transition-delay: .1s;
  }
}
`;

const SigninBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  // background-color: #ececec;
  width: 100%;
  max-width: 300px;
  min-width: 230px;
  height: 48px;
  padding: 13px 0;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  &:disabled {
    background-color: #ececec;
  }
`;

const IdIcon = styled(IoMailOutline)`
  margin-right: 5px;
  font-size: 15px;
`;

const PwIcon = styled(IoKeyOutline)`
  margin-right: 5px;
  font-size: 15px;
`;
