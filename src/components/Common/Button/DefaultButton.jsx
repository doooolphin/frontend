import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const LoginBtn = styled.button`
  background: ${(props) => (props.isChkTrue ? '#ac4ac4' : '#ddd')};
  color: #ffffff;
  width: 500px;
  height: 70px;
  border-radius: ${(props) => (props.radius === '0' ? '0px' : '5px')};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;

const DefaultButton = (props) => {
  return (
    <LoginBtn onClick={props.onClickNext || props.onClickRequest} isChkTrue={props.isChkTrue} radius={props.radius}>
      {props.text}
    </LoginBtn>
  );
};

DefaultButton.propTypes = {
  text: PropTypes.string,
  radius: PropTypes.string,
  onClickNext: PropTypes.func,
  onClickRequest: PropTypes.func,
  isChkTrue: PropTypes.boolean
};

export default DefaultButton;
