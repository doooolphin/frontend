import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';

const HeadWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 30px;
`;
const FootWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 30px;
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
const LoginBtn = styled.button`
  background: #ac4ac4;
  color: #ffffff;
  width: 500px;
  height: 70px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  flex: 1 1;
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
  return (
    <Layout inner={<></>} title="로그인">
      <HeadWrapper>
        <SubWrapper>
          <Input placeholder="아이디" />
        </SubWrapper>
        <SubWrapper>
          <Input placeholder="비밀번호" type="password" />
        </SubWrapper>
        <SubWrapper>
          <LoginBtn>로그인</LoginBtn>
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
          혹시, 돌핀이 처음이신가요? <SignUpBtn>회원가입</SignUpBtn>
        </SignUp>
      </FootWrapper>
    </Layout>
  );
};

export default SignIn;
