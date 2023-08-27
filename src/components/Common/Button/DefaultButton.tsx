import { color } from '@styles/common';
import { css } from '@emotion/react';

type Props = {
  text?: string;
  radius?: number;
  onClick: () => void;
  isActive: boolean;
};

const buttonCss = {
  button: css`
    background: ${color.lightgray};
    color: #ffffff;
    height: 70px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  `,
  activeButton: css`
    background: ${color.primary};
  `
};

const DefaultButton = (props: Props) => {
  return (
    <button
      css={[
        buttonCss.button,
        props.isActive && buttonCss.activeButton,
        props.radius &&
          css`
            border-radius: ${props.radius}px;
          `
      ]}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default DefaultButton;
