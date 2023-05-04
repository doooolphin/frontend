import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { color } from '@styles/common';
import { memo, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

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
  min-height: 250px;
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
  display: flex;
  justify-content: space-between;
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
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const birthRef = useRef(null);
  const telRef = useRef(null);
  const authNumRef = useRef(null);

  const [info, setInfo] = useState({
    name: '',
    birth: '',
    tel: '',
    isLocal: true,
    isMan: true
  });

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
    } else {
      isRequest ? authNumRef.current.focus() : telRef.current.focus();
    }
  };

  const setInfoState = (value) => {
    setInfo({
      ...info,
      ...value
    });
  };

  const onChangeNameInput = (event) => {
    const result = event.target.value.replace(/[^(ㄱ-힣)]/g, '');
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

  const onClickRequest = () => {
    setIsRequest(true);
  };

  const onClickNextPage = () => {
    navigate('/sign-up/newemailpw');
  };

  const isAbleRequest = useMemo(
    () => info.birth.length > 9 && info.name && /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(info.tel),
    [info]
  );

  return (
    <>
      {contextHolder}
      <Layout footer={false} title="회원가입">
        <H1>
          서비스의 안전한 사용을 위해
          <br />
          본인인증해주세요.
        </H1>
        <MidWrapper>
          <SubWrapper
            css={
              activeInfo === 'name'
                ? borderColor
                : null ||
                  (isRequest &&
                    css`
                      pointer-events: none;
                    `)
            }
            onClick={() => onClickSubWrapper('name')}
          >
            <SideWrapper isLeft={true}>
              <NameText css={activeInfo === 'name' ? textColor : null} isRequest={isRequest}>
                이름
              </NameText>
              <Input
                ref={nameRef}
                value={info.name}
                onChange={onChangeNameInput}
                isRequest={isRequest}
                maxLength={25}
              />
            </SideWrapper>
            <SideWrapper>
              {nameBtnState && (
                <>
                  <NameBtn
                    onClick={() =>
                      setInfoState({
                        isLocal: true
                      })
                    }
                    css={info.isLocal ? btnPrimaryColor : btnWhiteColor}
                  >
                    내국인
                  </NameBtn>
                  <NameBtn
                    onClick={() =>
                      setInfoState({
                        isLocal: false
                      })
                    }
                    css={!info.isLocal ? btnPrimaryColor : btnWhiteColor}
                  >
                    외국인
                  </NameBtn>
                </>
              )}
            </SideWrapper>
          </SubWrapper>
          <SubWrapper
            css={
              activeInfo === 'birth'
                ? borderColor
                : null ||
                  (isRequest &&
                    css`
                      pointer-events: none;
                    `)
            }
            onClick={() => onClickSubWrapper('birth')}
          >
            <SideWrapper isLeft={true}>
              <NameText css={activeInfo === 'birth' ? textColor : null} isRequest={isRequest}>
                생년월일
              </NameText>
              <Input
                placeholder="YYYYMMDD"
                ref={birthRef}
                onChange={onChangeBirthInput}
                value={info.birth}
                isRequest={isRequest}
                maxLength={8}
              />
            </SideWrapper>
            <SideWrapper>
              {birthBtnState && (
                <>
                  <NameBtn
                    onClick={() =>
                      setInfoState({
                        isMan: true
                      })
                    }
                    css={info.isMan ? btnPrimaryColor : btnWhiteColor}
                  >
                    남
                  </NameBtn>
                  <NameBtn
                    onClick={() =>
                      setInfoState({
                        isMan: false
                      })
                    }
                    css={!info.isMan ? btnPrimaryColor : btnWhiteColor}
                  >
                    여
                  </NameBtn>
                </>
              )}
            </SideWrapper>
          </SubWrapper>
          <SubWrapper
            isLast={true}
            css={activeInfo === 'tel' ? borderColor : null}
            onClick={() => onClickSubWrapper('tel')}
          >
            <SideWrapper isLeft={true}>
              <NameText css={activeInfo === 'tel' ? textColor : null} isRequest={isRequest}>
                휴대전화 번호
              </NameText>
              <Input
                ref={telRef}
                onChange={onChangeTelInput}
                value={info.tel}
                readOnly={isRequest}
                isRequest={isRequest}
                maxLength={13}
              />
            </SideWrapper>
            {isRequest && (
              <>
                <AuthNumWrapper>
                  <NameText isRequest={isRequest}>인증번호</NameText>
                  <AuthMessage>인증번호를 보내드렸어요. ( 0분 0초)</AuthMessage>
                  <ReDiv>
                    <Input ref={authNumRef} />
                    <ReBtn onClickRequest={onClickRequest}>재요청</ReBtn>
                  </ReDiv>
                </AuthNumWrapper>
              </>
            )}
          </SubWrapper>
        </MidWrapper>
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
