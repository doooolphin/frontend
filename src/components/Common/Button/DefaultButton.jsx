import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const LoginBtn = styled.button`
  background: ${(props) => (props.isChkTrue ? '#ac4ac4' : '#ddd')};
  color: #ffffff;
  width: 500px;
  height: 70px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;

const DefaultButton = (props) => {
  return (
    <LoginBtn onClick={props.onClickNext} isChkTrue={props.isChkTrue}>
      {props.text}
    </LoginBtn>
  );
};

DefaultButton.propTypes = {
  text: PropTypes.string,
  onClickNext: PropTypes.func,
  isChkTrue: PropTypes.boolean
};

export default DefaultButton;
