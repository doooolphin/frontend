import Layout from '@components/Common/Layout';
import { css } from '@emotion/react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { color } from '@styles/common';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const AuthenticationCss = {
  subWrapper: css`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid ${color.lightgray};
  `,
  h1: css`
    font-size: 1em;
    margin-top: 60px;
    text-align: center;
    color: #666;
    margin-bottom: 50px;
  `,
  midWrapper: css`
    display: flex;
    flex-direction: column;
    min-height: 300px;
  `,
  input: css`
    border: none;
    outline: none;
    font-size: 14px;
  `,
  sideWrapper: css`
    display: flex;
    flex-direction: column;
  `,
  nameBtn: css`
    border: none;
    outline: none;
    height: 60px;
    font-size: 20px;
    border-radius: 20px;
    background: ${color.primary};
    color: ${color.white};
    height: 35px;
    width: 75px;
    font-size: 14px;
  `,
  nameText: css`
    font-size: 14px;
  `,
  authNumWrapper: css`
    border-top: 1px solid ${color.lightgray};
    width: 100%;
  `,
  authMessage: css`
    color: #e10000;
    margin-left: 10px;
  `,
  reBtn: css`
    color: #999;
    text-decoration: underline;
  `,
  reDiv: css`
    display: flex;
    justify-content: space-between;
  `,
  borderColor: css`
    border-color: ${color.primary};
  `,
  textColor: css`
    color: ${color.primary};
  `,
  btnPrimaryColor: css`
    background-color: ${color.primary};
  `,
  btnWhiteColor: css`
    background-color: ${color.white};
    color: ${color.lightgray};
  `,
  emailError: css`
    color: red;
    margin-left: 20px;
  `
};

const SignUpAuthentication = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const birthRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const authNumRef = useRef(null);

  const [info, setInfo] = useState({
    name: '',
    birth: '',
    tel: '',
    email: '',
    isLocal: true,
    isMan: 0
  });

  const [emailError, setEmailError] = useState('');

  const [nameBtnState, setNameBtnState] = useState(false);
  const [birthBtnState, setBirthBtnState] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [activeInfo, setActiveInfo] = useState(0);

  const onClickSubWrapper = (active) => {
    setActiveInfo(active);
    if (active === 'name') {
      nameRef.current.focus();
      !nameBtnState && setNameBtnState(true);
    } else if (active === 'birth') {
      birthRef.current.focus();
      !birthBtnState && setBirthBtnState(true);
    } else if (active === 'tel') {
      telRef.current.focus();
    } else {
      isRequest ? authNumRef.current.focus() : emailRef.current.focus();
    }
  };

  const setInfoState = (value) => {
    setInfo({
      ...info,
      ...value
    });
  };

  const onChangeNameInput = (event) => {
    const result = event.target.value.replace(/[^(ㄱ-힣)(a-z)(A-Z)]/g, '');
    setInfoState({
      name: result
    });
  };

  const onChangeBirthInput = (event) => {
    let result = event.target.value.replace(/[^0-9]/g, '').replace(/^(\d{4})(\d{2})(\d{2})$/, `$1/$2/$3`);
    if (result.length === 4) {
      if (Number(result) < 1900) {
        result = '';

        messageApi.open({
          type: 'warning',
          content: '연도를 정확히 입력해주세요'
        });
      }
    } else if (result.length === 6) {
      if (Number(result.slice(4, 6)) > 12 || result.slice(4, 6) < 1) {
        result = result.slice(0, 4);
        messageApi.open({
          type: 'warning',
          content: '월을 정확히 입력해주세요'
        });
      }
    } else if (result.length > 8) {
      if (Number(result.slice(8, 10)) > 31 || result.slice(8, 10) < 1) {
        result = result.slice(0, 7);
        messageApi.open({
          type: 'warning',
          content: '일을 정확히 입력해주세요'
        });
      }
    }
    setInfoState({
      birth: result
    });
  };

  const onChangeTelInput = (event) => {
    const result = event.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setInfoState({
      tel: result
    });
  };

  const onChangeEmailInput = (event) => {
    setInfoState({
      email: event.target.value
    });
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regex.test(event.target.value)) {
      setEmailError('');
    } else {
      setEmailError('이메일 형식에 맞지 않습니다.');
    }
  };

  const onClickRequest = () => {
    if (info.isMan === 0) {
      messageApi.open({
        type: 'warning',
        content: '성별을 선택해주세요'
      });
      return;
    }
    setIsRequest(true);
  };

  const onClickNextPage = () => {
    navigate('/sign-up/newemailpw');
  };

  useEffect(() => {
    if (isRequest) {
      authNumRef.current.focus();
      setActiveInfo('email');
    }
  }, [isRequest]);

  const isAbleRequest = useMemo(
    () =>
      info.birth.length > 9 &&
      info.name &&
      /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(info.tel) &&
      info.email &&
      !emailError,
    [info]
  );
  return (
    <>
      {contextHolder}
      <Layout footer={false} title="회원가입">
        <div css={AuthenticationCss.h1}>
          서비스의 안전한 사용을 위해
          <br />
          본인인증해주세요.
        </div>
        <div css={AuthenticationCss.midWrapper}>
          <div
            css={[
              AuthenticationCss.subWrapper,
              activeInfo === 'name'
                ? AuthenticationCss.borderColor
                : null ||
                  (isRequest &&
                    css`
                      pointer-events: none;
                      color: ${color.lightgray};
                    `)
            ]}
            onClick={() => onClickSubWrapper('name')}
          >
            <div css={AuthenticationCss.sideWrapper}>
              <span
                css={[AuthenticationCss.nameText, activeInfo === 'name' && AuthenticationCss.textColor]}
                isRequest={isRequest}
              >
                이름
              </span>
              <input
                type="text"
                css={AuthenticationCss.input}
                ref={nameRef}
                value={info.name}
                onChange={onChangeNameInput}
                isRequest={isRequest}
                maxLength={25}
              />
            </div>
            <div>
              {nameBtnState && (
                <>
                  <button
                    css={[
                      AuthenticationCss.nameBtn,
                      info.isLocal ? AuthenticationCss.btnPrimaryColor : AuthenticationCss.btnWhiteColor
                    ]}
                    onClick={() =>
                      setInfoState({
                        isLocal: true
                      })
                    }
                  >
                    내국인
                  </button>
                  <button
                    css={[
                      AuthenticationCss.nameBtn,
                      !info.isLocal ? AuthenticationCss.btnPrimaryColor : AuthenticationCss.btnWhiteColor
                    ]}
                    onClick={() =>
                      setInfoState({
                        isLocal: false
                      })
                    }
                  >
                    외국인
                  </button>
                </>
              )}
            </div>
          </div>
          <div
            css={[
              AuthenticationCss.subWrapper,
              activeInfo === 'birth'
                ? AuthenticationCss.borderColor
                : isRequest &&
                  css`
                    color: ${color.lightgray};
                    pointer-events: none;
                  `
            ]}
            onClick={() => onClickSubWrapper('birth')}
          >
            <div css={AuthenticationCss.sideWrapper}>
              <span
                css={[AuthenticationCss.nameText, activeInfo === 'birth' ? AuthenticationCss.textColor : null]}
                isRequest={isRequest}
              >
                생년월일
              </span>
              <input
                type="text"
                css={AuthenticationCss.input}
                placeholder="YYYYMMDD"
                ref={birthRef}
                onChange={onChangeBirthInput}
                value={info.birth}
                isRequest={isRequest}
                maxLength={8}
              />
            </div>
            <div>
              {birthBtnState && (
                <>
                  <button
                    css={[
                      AuthenticationCss.nameBtn,
                      info.isMan === 1 ? AuthenticationCss.btnPrimaryColor : AuthenticationCss.btnWhiteColor
                    ]}
                    onClick={() =>
                      setInfoState({
                        isMan: 1
                      })
                    }
                  >
                    남
                  </button>
                  <button
                    css={[
                      AuthenticationCss.nameBtn,
                      info.isMan === 2 ? AuthenticationCss.btnPrimaryColor : AuthenticationCss.btnWhiteColor
                    ]}
                    onClick={() =>
                      setInfoState({
                        isMan: 2
                      })
                    }
                  >
                    여
                  </button>
                </>
              )}
            </div>
          </div>
          <div
            css={[
              AuthenticationCss.subWrapper,
              activeInfo === 'tel'
                ? AuthenticationCss.borderColor
                : null ||
                  (isRequest &&
                    css`
                      color: ${color.lightgray};
                      pointer-events: none;
                    `)
            ]}
            isLast={true}
            onClick={() => onClickSubWrapper('tel')}
          >
            <div css={AuthenticationCss.sideWrapper}>
              <span
                css={[AuthenticationCss.nameText, activeInfo === 'tel' ? AuthenticationCss.textColor : null]}
                isRequest={isRequest}
              >
                휴대전화 번호
              </span>
              <input
                type="text"
                css={AuthenticationCss.input}
                ref={telRef}
                onChange={onChangeTelInput}
                value={info.tel}
                readOnly={isRequest}
                isRequest={isRequest}
                maxLength={13}
              />
            </div>
          </div>
          <div
            css={[
              AuthenticationCss.subWrapper,
              activeInfo === 'email' ? AuthenticationCss.borderColor : null,
              isRequest &&
                css`
                  flex-direction: column;
                  align-items: flex-start;
                `
            ]}
            isLast={true}
            onClick={() => onClickSubWrapper('email')}
          >
            <div
              css={[
                AuthenticationCss.sideWrapper,
                isRequest &&
                  css`
                    color: ${color.lightgray};
                  `
              ]}
            >
              <span
                css={[AuthenticationCss.nameText, activeInfo === 'email' ? AuthenticationCss.textColor : null]}
                isRequest={isRequest}
              >
                이메일<span css={AuthenticationCss.emailError}>{emailError}</span>
              </span>
              <input
                type="text"
                css={AuthenticationCss.input}
                ref={emailRef}
                onChange={onChangeEmailInput}
                value={info.email}
                readOnly={isRequest}
                isRequest={isRequest}
                maxLength={50}
              />
            </div>
            {isRequest && (
              <div
                css={
                  (AuthenticationCss.authNumWrapper,
                  css`
                    margin-top: 10px;
                    padding-top: 10px;
                    width: 100%;
                    border-top: 1px solid lightgray;
                  `)
                }
              >
                <span css={AuthenticationCss.nameText}>인증번호</span>
                <span css={AuthenticationCss.authMessage}>인증번호를 보내드렸어요. ( 0분 0초)</span>
                <div css={AuthenticationCss.reDiv}>
                  <input type="text" css={AuthenticationCss.input} ref={authNumRef} />
                  <button css={AuthenticationCss.reBtn} onClickRequest={onClickRequest}>
                    재요청
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {isAbleRequest && (
          <DefaultButton
            text={isRequest ? '확인' : '인증번호 요청'}
            isChkTrue={true}
            radius="0"
            onClickRequest={isRequest ? onClickNextPage : onClickRequest}
          />
        )}
      </Layout>
    </>
  );
};

export default memo(SignUpAuthentication);
