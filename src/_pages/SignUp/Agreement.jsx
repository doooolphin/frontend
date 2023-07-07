import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { color } from '@styles/common';
import { RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const FootWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  width: 100%;
  border-bottom: ${(props) => (props.isAll ? '1px solid' : 'none')};
  border-color: ${color.gray};
`;
const H1 = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: 60px;
`;
const ChkBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  accent-color: ${color.primary};
  border: 10px solid black;
  border-radius: 5px;
`;
const Quarter = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  flex: 1;
  cursor: pointer;
`;
const RightArror = styled(RightOutlined)`
  color: ${color.gray};
  cursor: pointer;
`;
const AllAgreeText = styled.span`
  font-weight: bold;
`;
const MidWrapper = styled.span`
  height: 450px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SignUp = () => {
  const [agreementItems, setAgreementItems] = useState([
    { id: 0, title: '돌핀 이용약관 동의 (필수)', required: true, checked: false },
    { id: 1, title: '전자금융거래 이용약관 동의 (필수)', required: true, checked: false },
    { id: 2, title: '개인정보 수집 이용 동의 (필수)', required: true, checked: false },
    { id: 3, title: '개인정보 수집 이용 동의 (선택)', required: false, checked: false },
    { id: 4, title: '개인정보 제3자 제공 동의 (선택)', required: false, checked: false },
    { id: 5, title: '마케팅정보 메일, SMS 수신동의 (선택)', required: false, checked: false }
  ]);

  // 체크박스 단일 선택
  const handleSingleCheck = (id) => {
    setAgreementItems(
      agreementItems.map((item) =>
        item.id === id
          ? {
              ...item,
              checked: !item.checked
            }
          : item
      )
    );
  };

  const isAllChecked = agreementItems.every((item) => item.checked);

  // 체크박스 전체 선택
  const handleAllCheck = () => {
    setAgreementItems(
      agreementItems.map((item) => ({
        ...item,
        checked: !isAllChecked
      }))
    );
  };
  const navigate = useNavigate();

  const isChkTrue = agreementItems.every((item) => {
    return !item.required || (item.required && item.checked);
  });

  const onClickNext = () => {
    if (isChkTrue) navigate('/sign-up/authentication');
  };

  return (
    <Layout
      footer={false}
      title="회원가입"
      innerStyle={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <Container>
        <H1>
          반가워요! 가입하려면
          <br />
          약관에 동의가 필요해요.
        </H1>
        <MidWrapper>
          <SubWrapper isAll={true}>
            <Label>
              <Quarter>
                <ChkBox type="checkbox" onChange={handleAllCheck} checked={isAllChecked} />
                <AllAgreeText>전체동의</AllAgreeText>
              </Quarter>
            </Label>
          </SubWrapper>
          {agreementItems?.map((data, key) => {
            return (
              <SubWrapper key={key}>
                <Label>
                  <Quarter>
                    <ChkBox type="checkbox" onChange={() => handleSingleCheck(data.id)} checked={data.checked} />
                    {data.title}
                  </Quarter>
                </Label>
                <Quarter>
                  <RightArror />
                </Quarter>
              </SubWrapper>
            );
          })}
        </MidWrapper>
        <FootWrapper>
          <DefaultButton text="다음" onClickNext={onClickNext} isChkTrue={isChkTrue} />
        </FootWrapper>
      </Container>
    </Layout>
  );
};

export default SignUp;
