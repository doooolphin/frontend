import Layout from '@components/Common/Layout';
import { color } from '@styles/common';
import { RightOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const agreementCss = {
  title: css`
    font-size: 2em;
    font-weight: bold;
    margin-top: 60px;
  `,
  agreeList: css`
    margin-top: 50px;
    height: 450px;
    display: flex;
    flex-direction: column;
  `,
  agreeItem: css`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  `,
  agreeItemAll: css`
    border-bottom: 1px solid ${color.gray};
    font-weight: bold;
  `,
  checkbox: css`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    accent-color: ${color.primary};
    border: 10px solid black;
    border-radius: 5px;
  `,
  textWrap: css`
    display: flex;
    align-items: center;
  `,
  arrow: css`
    color: ${color.gray};
    cursor: pointer;
  `,
  buttonWrap: css`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  `
};

const SignUp = () => {
  const [agreementItems, setAgreementItems] = useState([
    { id: 0, title: '돌핀 이용약관 동의', required: true, checked: false },
    { id: 1, title: '전자금융거래 이용약관 동의', required: true, checked: false },
    { id: 2, title: '개인정보 수집 이용 동의', required: true, checked: false },
    { id: 3, title: '개인정보 수집 이용 동의', required: false, checked: false },
    { id: 4, title: '개인정보 제3자 제공 동의', required: false, checked: false },
    { id: 5, title: '마케팅정보 메일, SMS 수신동의', required: false, checked: false }
  ]);

  // 체크박스 단일 선택
  const handleSingleCheck = (id: number) => {
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

  // 체크박스 전체 선택
  const handleAllCheck = () => {
    setAgreementItems(
      agreementItems.map((item) => ({
        ...item,
        checked: !isAllChecked
      }))
    );
  };
  const router = useRouter();

  const isAllChecked = useMemo(() => agreementItems.every((item) => item.checked), [agreementItems]);

  const isActive = useMemo(
    () =>
      agreementItems.every((item) => {
        return !item.required || (item.required && item.checked);
      }),
    [agreementItems]
  );

  const onClickNext = () => {
    if (isActive) router.push('/sign-up/authentication');
  };

  return (
    <Layout
      footer={false}
      title="회원가입"
      innerStyle={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div css={agreementCss.title}>
        반가워요! 가입하려면
        <br />
        약관에 동의가 필요해요.
      </div>
      <div css={agreementCss.agreeList}>
        <label css={[agreementCss.agreeItem, agreementCss.agreeItemAll]} htmlFor="checkbox_all">
          <span css={agreementCss.textWrap}>
            <input
              css={agreementCss.checkbox}
              id="checkbox_all"
              data-testid="checkbox_all"
              type="checkbox"
              onChange={handleAllCheck}
              checked={isAllChecked}
            />
            전체동의
          </span>
        </label>
        {agreementItems?.map((data, key) => {
          return (
            <label css={[agreementCss.agreeItem]} key={key} htmlFor={`checkbox_${data.id}`}>
              <span css={agreementCss.textWrap}>
                <input
                  css={agreementCss.checkbox}
                  id={`checkbox_${data.id}`}
                  data-testid={`checkbox_${data.required ? 'required' : 'optional'}_${data.id}`}
                  type="checkbox"
                  onChange={() => handleSingleCheck(data.id)}
                  checked={data.checked}
                />
                {`${data.title} (${data.required ? '필수' : '선택'})`}
              </span>
              <RightOutlined css={agreementCss.arrow} />
            </label>
          );
        })}
      </div>
      <div css={agreementCss.buttonWrap}>
        <DefaultButton text="다음" onClick={onClickNext} isActive={isActive} />
      </div>
    </Layout>
  );
};

export default SignUp;
