import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { color } from '@styles/common';
import { useRef, useState } from 'react';

const SubWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  /* border-bottom: ${(props) => (props.isLast ? '1px solid #bbb;' : 'none !important')}; */
  flex-direction: ${(props) => props.isLast && 'column'};
  border: 1px solid ${color.lightgray};
`;

const H1 = styled.div`
  font-size: 1em;
  margin-top: 60px;
  text-align: center;
  color: #666;
  margin-bottom: 50px;
`;

const MidWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  color: ${(props) => props.isRequest && color.lightgray};
`;

const SideWrapper = styled.div`
  border: none;
  outline: none;
  height: 60px;
  font-size: 20px;
  display: flex;
  flex-direction: ${(props) => (props.isLeft ? 'column' : 'row')};
  flex: ${(props) => (props.isLeft ? '3' : '1')};
  ${(props) => (props.isLeft ? 'justify-content: center' : 'align-items: center')};
  margin-bottom: 15px;
  width: 100%;
`;

const NameBtn = styled.button`
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
`;

const NameText = styled.span`
  font-size: 14px;
  color: ${(props) => props.isRequest && color.lightgray};
`;

const AuthNumWrapper = styled.div`
  border-top: 1px solid ${color.lightgray};
  width: 100%;
  padding-top: 15px;
`;

const AuthMessage = styled.span`
  color: #e10000;
  margin-left: 10px;
`;

const ReBtn = styled.button`
  color: #999;
  text-decoration: underline;
`;

const ReDiv = styled.div`
  text-align: right;
`;

const borderColor = css`
  border-color: ${color.primary} !important;
`;

const textColor = css`
  color: ${color.primary} !important;
`;

const btnPrimaryColor = css`
  background-color: ${color.primary};
`;

const btnWhiteColor = css`
  background-color: ${color.white};
  color: ${color.gray};
`;

const SignUpAuthentication = () => {
  const nameRef = useRef(null);
  const birthRef = useRef(null);
  const telRef = useRef(null);
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isBirthFocus, setIsBirthFocus] = useState(false);
  const [isTelFocus, setIsTelFocus] = useState(false);
  const [nameBtnState, setNameBtnState] = useState(false);
  const [birthBtnState, setBirthBtnState] = useState(false);
  const [nameBtn, setNameBtn] = useState(true);
  const [birthBtn, setBirthBtn] = useState(true);
  const [nameInput, setNameInput] = useState('');
  const [birthInput, setBirthInput] = useState('');
  const [telInput, setTelInput] = useState('');
  const [requestBtn, setrequestBtn] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const onClickSubWrapper = (idx) => {
    if (idx === 1) {
      nameRef.current.focus();
      setIsNameFocus(true);
      setNameBtnState(true);
    } else if (idx === 2) {
      birthRef.current.focus();
      setIsBirthFocus(true);
      setBirthBtnState(true);
    } else {
      telRef.current.focus();
      setIsTelFocus(true);
    }
  };

  const onToggleName = (nameBool) => {
    if (nameBool) {
      // 내국인이면
      setNameBtn(true);
    } else {
      // 외국인이면
      setNameBtn(false);
    }
  };

  const onToggleBirth = (nameBool) => {
    if (nameBool) {
      // 남 이면
      setBirthBtn(true);
    } else {
      // 여 이면
      setBirthBtn(false);
    }
  };

  const onChangeNameInput = (event) => {
    setNameInput(event.target.value);
    if (event.target.value && birthInput && telInput) setrequestBtn(true);
    else {
      setrequestBtn(false);
    }
  };

  const onChangeBirthInput = (event) => {
    setBirthInput(event.target.value);
    if (event.target.value && nameInput && telInput) setrequestBtn(true);
    else {
      setrequestBtn(false);
    }
  };

  const onChangeTelInput = (event) => {
    setTelInput(event.target.value);
    if (event.target.value && birthInput && nameInput) setrequestBtn(true);
    else {
      setrequestBtn(false);
    }
  };

  const onClickRequest = () => {
    setIsRequest(true);
    setIsTelFocus(true);
  };
  return (
    <Layout title="회원가입">
      <H1>
        서비스의 안전한 사용을 위해
        <br />
        본인인증해주세요.
      </H1>
      <MidWrapper>
        <SubWrapper
          css={
            isNameFocus
              ? borderColor
              : null ||
                (isRequest &&
                  css`
                    pointer-events: none;
                  `)
          }
          onClick={() => onClickSubWrapper(1)}
        >
          <SideWrapper isLeft={true}>
            <NameText css={isNameFocus ? textColor : null} isRequest={isRequest}>
              이름
            </NameText>
            <Input
              ref={nameRef}
              onBlur={() => {
                setIsNameFocus(false);
              }}
              onChange={onChangeNameInput}
              isRequest={isRequest}
            />
          </SideWrapper>
          <SideWrapper>
            {nameBtnState && (
              <>
                <NameBtn onClick={() => onToggleName(true)} css={nameBtn ? btnPrimaryColor : btnWhiteColor}>
                  내국인
                </NameBtn>
                <NameBtn onClick={() => onToggleName(false)} css={nameBtn ? btnWhiteColor : btnPrimaryColor}>
                  외국인
                </NameBtn>
              </>
            )}
          </SideWrapper>
        </SubWrapper>
        <SubWrapper
          css={
            isBirthFocus
              ? borderColor
              : null ||
                (isRequest &&
                  css`
                    pointer-events: none;
                  `)
          }
          onClick={() => onClickSubWrapper(2)}
        >
          <SideWrapper isLeft={true}>
            <NameText css={isBirthFocus ? textColor : null} isRequest={isRequest}>
              생년월일
            </NameText>
            <Input
              placeholder="YYYYMMDD"
              ref={birthRef}
              onBlur={() => {
                setIsBirthFocus(false);
              }}
              onChange={onChangeBirthInput}
              isRequest={isRequest}
            />
          </SideWrapper>
          <SideWrapper>
            {birthBtnState && (
              <>
                <NameBtn onClick={() => onToggleBirth(true)} css={birthBtn ? btnPrimaryColor : btnWhiteColor}>
                  남
                </NameBtn>
                <NameBtn onClick={() => onToggleBirth(false)} css={birthBtn ? btnWhiteColor : btnPrimaryColor}>
                  여
                </NameBtn>
              </>
            )}
          </SideWrapper>
        </SubWrapper>
        <SubWrapper isLast={true} css={isTelFocus ? borderColor : null} onClick={() => onClickSubWrapper(3)}>
          <SideWrapper isLeft={true}>
            <NameText css={isTelFocus ? textColor : null} isRequest={isRequest}>
              휴대전화 번호
            </NameText>
            <Input
              ref={telRef}
              onBlur={() => {
                setIsTelFocus(false);
              }}
              onChange={onChangeTelInput}
              readOnly={isRequest}
              isRequest={isRequest}
            />
          </SideWrapper>
          {isRequest && (
            <>
              <AuthNumWrapper>
                <NameText isRequest={isRequest}>인증번호</NameText>{' '}
                <AuthMessage>인증번호를 보내드렸어요. ( 0분 0초)</AuthMessage>
                <ReDiv>
                  <ReBtn onClickRequest={onClickRequest}>재요청</ReBtn>
                </ReDiv>
              </AuthNumWrapper>
            </>
          )}
        </SubWrapper>
      </MidWrapper>
      {requestBtn && <DefaultButton text="인증번호 요청" isChkTrue={true} radius="0" onClickRequest={onClickRequest} />}
    </Layout>
  );
};

export default SignUpAuthentication;
