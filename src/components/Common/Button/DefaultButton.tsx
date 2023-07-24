import styled from '@emotion/styled';
import { color } from '@styles/common';

type Props = {
  text?: string;
  radius?: string;
  onClickNext?: () => void;
  onClickRequest?: () => void;
  isChkTrue: boolean;
};

const LoginBtn = styled.button<Props>`
  background: ${(props) => (props.isChkTrue ? color.primary : color.lightgray)};
  color: #ffffff;
  height: 70px;
  border-radius: ${(props) => (props.radius === '0' ? '0px' : '5px')};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;

const DefaultButton = (props: Props) => {
  return (
    <LoginBtn onClick={props.onClickNext || props.onClickRequest} isChkTrue={props.isChkTrue} radius={props.radius}>
      {props.text}
    </LoginBtn>
  );
};

export default DefaultButton;
