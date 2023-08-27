import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import DefaultButton from '@components/Common/Button/DefaultButton';
import { color } from '@styles/common';
import { ChangeEvent, memo, useMemo, useRef, useState } from 'react';

const SubWrapper = styled.div<{
  isLast?: boolean;
}>`
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

const Input = styled.input<{
  isRequest?: boolean;
}>`
  border: none;
  outline: none;
  font-size: 14px;
  color: ${(props) => props.isRequest && color.lightgray};
`;

const SideWrapper = styled.div<{
  isLeft?: boolean;
}>`
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
  border-radius: 20px;
  background: ${color.primary};
  color: ${color.white};
  height: 35px;
  width: 75px;
  font-size: 14px;
`;

const NameText = styled.span<{
  isRequest?: boolean;
}>`
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

type Info = {
  name?: string;
  birth?: string;
  tel?: string;
  isLocal?: boolean;
  isMan?: boolean;
};
const SignUpAuthentication = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const authNumRef = useRef<HTMLInputElement>(null);

  const [info, setInfo] = useState<Info>({
    name: '',
    birth: '',
    tel: '',
    isLocal: true,
    isMan: true
  });

  const [nameBtnState, setNameBtnState] = useState(false);
  const [birthBtnState, setBirthBtnState] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [activeInfo, setActiveInfo] = useState('');

  const onClickSubWrapper = (active: string) => {
    setActiveInfo(active);
    if (active === 'name') {
      nameRef?.current?.focus();
      !nameBtnState && setNameBtnState(true);
    } else if (active === 'birth') {
      birthRef?.current?.focus();
      !birthBtnState && setBirthBtnState(true);
    } else {
      isRequest ? authNumRef?.current?.focus() : telRef?.current?.focus();
    }
  };

  const setInfoState = (value: Info) => {
    setInfo({
      ...info,
      ...value
    });
  };

  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoState({
      name: event.target.value
    });
  };

  const onChangeBirthInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoState({
      birth: event.target.value
    });
  };

  const onChangeTelInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoState({
      tel: event.target.value
    });
  };

  const onClickRequest = () => {
    setIsRequest(true);
  };

  const isAbleRequest = useMemo(() => info.birth && info.name && info.tel, [info]);

  return (
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
              : isRequest &&
                css`
                  pointer-events: none;
                `
          }
          onClick={() => onClickSubWrapper('name')}
        >
          <SideWrapper isLeft={true}>
            <NameText css={activeInfo === 'name' ? textColor : null} isRequest={isRequest}>
              이름
            </NameText>
            <Input ref={nameRef} value={info.name} onChange={onChangeNameInput} isRequest={isRequest} />
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
              : isRequest &&
                css`
                  pointer-events: none;
                `
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
            />
          </SideWrapper>
          {isRequest && (
            <>
              <AuthNumWrapper>
                <NameText isRequest={isRequest}>인증번호</NameText>
                <AuthMessage>인증번호를 보내드렸어요. ( 0분 0초)</AuthMessage>
                <ReDiv>
                  <Input ref={authNumRef} />
                  <ReBtn onClick={onClickRequest}>재요청</ReBtn>
                </ReDiv>
              </AuthNumWrapper>
            </>
          )}
        </SubWrapper>
      </MidWrapper>
      {isAbleRequest && <DefaultButton text="인증번호 요청" isActive={true} radius={0} onClick={onClickRequest} />}
    </Layout>
  );
};

export default memo(SignUpAuthentication);
