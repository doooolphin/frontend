import Layout from '@components/Common/Layout';
import InputText from '@components/Common/InputText/InputText';
import { useState } from 'react';
import { css } from '@emotion/react';

const newEmailPwCss = {
  title: css`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 80px;
    white-space: pre-line;
  `
};

function NewEmailPw() {
  const [validateChk, setValidateChk] = useState([
    {
      isChecked: false,
      validateNm: 'email',
      label: '이메일 주소',
      regex: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
      errorText: '이메일 형식에 맞지 않습니다.',
      maxLength: '50',
      placeHolder: '이메일을 입력해주세요.',
      nextTitle: '이메일로 \n인증번호를 보냈어요.'
    },
    {
      isChecked: false,
      validateNm: 'authNum',
      label: '인증번호',
      regex: '^[0-9]+$',
      errorText: '인증번호는 숫자만 입력 가능합니다.',
      maxLength: '4',
      placeHolder: '4자리',
      nextTitle: '닉네임은 \n무엇으로 할까요?'
    },
    {
      isChecked: false,
      validateNm: 'name',
      label: '닉네임',
      regex: '^[a-zA-Z0-9가-힣]{2,}$',
      errorText: '닉네임은 2글자 이상, 영문, 숫자, 한글만 입력 가능합니다.',
      maxLength: '15',
      placeHolder: '닉네임을 입력해주세요.',
      nextTitle: '비밀번호를 입력하면\n회원가입이 완료됩니다!'
    },
    {
      isChecked: false,
      validateNm: 'password',
      label: '비밀번호',
      regex: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
      errorText: '비밀번호는 대문자, 특수문자 1글자 포함되어야 합니다.',
      maxLength: '15',
      placeHolder: '비밀번호를 입력해주세요.'
    }
  ]);
  console.log(validateChk);
  return (
    <Layout footer={false} title="회원가입">
      <div>
        <div css={newEmailPwCss.title}>
          {validateChk.filter(
            (el, index) => el.isChecked && validateChk.filter((el) => el.isChecked).length === index + 1
          )[0]?.nextTitle ?? '아이디로 쓸 이메일 주소를\n 알려주세요.'}
        </div>
        {validateChk.map((el, index) =>
          index !== 0 ? (
            validateChk[index - 1].isChecked && (
              <InputText key={el.validateNm} setValidateChk={setValidateChk} validateChk={validateChk} index={index} />
            )
          ) : (
            <InputText key={el.validateNm} setValidateChk={setValidateChk} validateChk={validateChk} index={index} />
          )
        )}
      </div>
    </Layout>
  );
}

export default NewEmailPw;
