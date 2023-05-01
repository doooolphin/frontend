import PropTypes from 'prop-types';
import { useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const inputTextCss = {
  wrap: css`
    margin: 40px 0;
  `,
  inputWrap: css`
    width: 100%;
    position: relative;
    display: flex;
  `,
  label: css`
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: #fff;
    padding: 0 10px;
    font-size: 14px;
    color: gray;
  `,
  input: css`
    width: 100%;
    height: 60px;
    flex: 1;
    padding-left: 10px;
    pointer-events: ${(props) => (props.isChecked ? 'none' : '')};
  `,
  btnChk: css`
    width: 90px;
    height: 60px;
    margin-left: 10px;
    background-color: #ccc;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    justify-content: center;
    align-items: center;
    display: flex;
  `,
  errorText: css`
    color: red;
  `,
  chkIcon: css`
    position: absolute;
    right: 20px;
    top: 20px;
  `,
  timerWrap: css`
    position: absolute;
    right: 110px;
    top: 17px;
  `,
  timer: css`
    color: red;
  `,
  resend: css`
    cursor: pointer;
    padding: 5px 10px;
    font-size: 12px;
    border: 1px solid #ccc;
    margin-left: 10px;
  `
};

function InputText(props) {
  const [input, setInput] = useState('');
  const [errorText, setErrorText] = useState('');
  const validateObj = [...props.validateChk];

  const onClickChk = () => {
    const regex = new RegExp(props.validateChk[props.index].regex);
    const result = regex.test(input);

    if (result) {
      validateObj[props.index].isChecked = true;
      props.setValidateChk(validateObj);
      setErrorText('');

      // TODO: email이면 중복검사 api 요청
    } else {
      validateObj[props.index].isChecked = false;
      props.setValidateChk(validateObj);
      setErrorText(validateObj[props.index].errorText);
    }
  };
  return (
    <div css={inputTextCss.wrap}>
      <div css={inputTextCss.inputWrap}>
        <span css={inputTextCss.label}>{props.validateChk[props.index].label}</span>
        <input
          css={inputTextCss.input}
          onChange={(event) => setInput(event.target.value)}
          isChecked={validateObj[props.index].isChecked}
          maxLength={validateObj[props.index].maxLength}
          placeholder={validateObj[props.index].placeHolder}
        />
        {!validateObj[props.index].isChecked && props.index === 1 && (
          <div css={inputTextCss.timerWrap}>
            <span css={inputTextCss.timer}>5:00</span>
            <span css={inputTextCss.resend}>다시 받기</span>
          </div>
        )}
        {validateObj[props.index].isChecked ? (
          <span css={inputTextCss.chkIcon}>
            <CheckOutlined />
          </span>
        ) : (
          <div css={inputTextCss.btnChk} onClick={onClickChk}>
            확인
          </div>
        )}
      </div>
      <div css={inputTextCss.errorText}>{errorText}</div>
    </div>
  );
}

InputText.propTypes = {
  setValidateChk: PropTypes.object,
  validateChk: PropTypes.object,
  index: PropTypes.number
};

export default InputText;
