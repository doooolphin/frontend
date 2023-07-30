import DefaultButton from '@components/Common/Button/DefaultButton';
import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const HeadWrapper = styled.div`
  height: 400px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
const FootWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  flex: 1 1;
  height: 60px;
  font-size: 20px;
`;
const FindSpan = styled.button<{ isPw?: boolean }>`
  color: #777;
  font-size: 20px;

  &::before {
    ${(props) =>
      props.isPw
        ? css`
            content: '';
            display: inline-block;
            width: 1px;
            height: 18px;
            background-color: #777;
            vertical-align: -1px;
            margin: 0 15px;
          `
        : ''}
  }
`;
const ApiLoginBtn = styled.button`
  border-radius: 5px;
  font-size: 18px;
  border: 1.5px solid;
  margin: 5px 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUp = styled.span`
  text-align: center;
  padding-top: 15px;
  font-size: 18px;
`;
const SignUpBtn = styled.button`
  color: #ac4ac4;
`;
const Img = styled.img`
  display: inline;
  width: 25px;
  margin-right: 5px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SignIn = () => {
  const router = useRouter();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [isChkTrue, setIsChkTrue] = useState(false);
  const onChangeId = (event: ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
    if (event.target.value && inputPw) {
      setIsChkTrue(true);
    } else {
      setIsChkTrue(false);
    }
  };
  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPw(event.target.value);
    if (event.target.value && inputId) {
      setIsChkTrue(true);
    } else {
      setIsChkTrue(false);
    }
  };
  return (
    <Layout
      footer={false}
      title="로그인"
      innerStyle={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <Container>
        <HeadWrapper>
          <SubWrapper>
            <Input placeholder="아이디" onChange={onChangeId} />
          </SubWrapper>
          <SubWrapper>
            <Input placeholder="비밀번호" type="password" onChange={onChangePw} />
          </SubWrapper>
          <SubWrapper>
            <DefaultButton text="로그인" isChkTrue={isChkTrue} />
          </SubWrapper>
          <SubWrapper>
            <FindSpan>아이디 찾기</FindSpan>
            <FindSpan isPw={true}>비밀번호 찾기</FindSpan>
          </SubWrapper>
        </HeadWrapper>
        <FootWrapper>
          <ApiLoginBtn>
            <Img src="facebook.png" alt="facebook" />
            페이스북으로 로그인
          </ApiLoginBtn>
          <ApiLoginBtn>
            <Img src="naver.png" alt="naver" />
            네이버로 로그인
          </ApiLoginBtn>
          <SignUp>
            혹시, 돌핀이 처음이신가요? <SignUpBtn onClick={() => router.push('/sign-up/agreement')}>회원가입</SignUpBtn>
          </SignUp>
        </FootWrapper>
      </Container>
    </Layout>
  );
};

export default SignIn;
