import DefaultButton from '@components/Common/Button/DefaultButton';
import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
const FindSpan = styled.button`
  margin: 0 20px;
  color: #777;
  font-size: 20px;
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
  width: ${(props) => (props.isNaver ? '15px' : '20px')};
  display: inline;
  margin-right: ${(props) => (props.isNaver ? '10px' : '5px')};
`;

const SignIn = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [isChkTrue, setIsChkTrue] = useState(false);
  const onChangeId = (event) => {
    setInputId(event.target.value);
    if (event.target.value && inputPw) {
      setIsChkTrue(true);
    } else {
      setIsChkTrue(false);
    }
  };
  const onChangePw = (event) => {
    setInputPw(event.target.value);
    if (event.target.value && inputId) {
      setIsChkTrue(true);
    } else {
      setIsChkTrue(false);
    }
  };
  return (
    <Layout inner={<></>} footer={false} title="로그인">
      <HeadWrapper>
        <SubWrapper>
          <Input placeholder="아이디" onChange={onChangeId} />
        </SubWrapper>
        <SubWrapper>
          <Input placeholder="비밀번호" type="password" onChange={onChangePw} />
        </SubWrapper>
        <SubWrapper>
          <DefaultButton text="로그인" inputId={inputId} isChkTrue={isChkTrue} />
        </SubWrapper>
        <SubWrapper>
          <FindSpan>아이디 찾기</FindSpan> | <FindSpan>비밀번호 찾기</FindSpan>
        </SubWrapper>
      </HeadWrapper>
      <FootWrapper>
        <ApiLoginBtn>
          <Img src="facebook.png" />
          페이스북으로 로그인
        </ApiLoginBtn>
        <ApiLoginBtn>
          <Img isNaver={true} src="naver.png" />
          네이버로 로그인
        </ApiLoginBtn>
        <SignUp>
          혹시, 돌핀이 처음이신가요? <SignUpBtn onClick={() => navigate('/sign-up-agreement')}>회원가입</SignUpBtn>
        </SignUp>
      </FootWrapper>
    </Layout>
  );
};

export default SignIn;
