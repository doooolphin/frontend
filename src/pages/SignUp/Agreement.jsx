import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { color } from '@styles/common';
import { RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { useNavigate } from 'react-router-dom';

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

const SignUp = () => {
  const data = [
    { id: 0, title: '돌핀 이용약관 동의 (필수)', required: true },
    { id: 1, title: '전자금융거래 이용약관 동의 (필수)', required: true },
    { id: 2, title: '개인정보 수집 이용 동의 (필수)', required: true },
    { id: 3, title: '개인정보 수집 이용 동의 (선택)', required: false },
    { id: 4, title: '개인정보 제3자 제공 동의 (선택)', required: false },
    { id: 5, title: '마케팅정보 메일, SMS 수신동의 (선택)', required: false }
  ];

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 필수인 items
  const filterRequiredItems = (data) => {
    return data.filter((el) => el.required);
  };

  // 필수가 모두 체크됐는지?
  const isRequiredChecked = (data, checkItems) => {
    const requiredItemList = filterRequiredItems(data);
    return requiredItemList.every((el) => checkItems.includes(el.id));
  };

  const isChkTrue = isRequiredChecked(data, checkItems);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      setCheckItems(data.map((el) => el.id));
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  const navigate = useNavigate();

  const onClickNext = () => {
    if (isChkTrue) navigate('/sign-up/authentication');
  };

  return (
    <Layout footer={false} title="회원가입">
      <H1>
        반가워요! 가입하려면
        <br />
        약관에 동의가 필요해요.
      </H1>
      <MidWrapper>
        <SubWrapper isAll={true}>
          <Label>
            <Quarter>
              <ChkBox
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false}
              />
              <AllAgreeText>전체동의</AllAgreeText>
            </Quarter>
          </Label>
        </SubWrapper>
        {data?.map((data, key) => {
          return (
            <SubWrapper key={key}>
              <Label>
                <Quarter>
                  <ChkBox
                    type="checkbox"
                    onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                    checked={checkItems.includes(data.id) ? true : false}
                  />
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
    </Layout>
  );
};

export default SignUp;
