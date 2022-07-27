import styled, { css } from 'styled-components';

//스타일 설정
const TestEmotion = styled.button`
  background-color: red;
  // color: white;
  font-size: 20px;
  padding: 0.25em 6em;
  border: solid 2px pink;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  ${(props) =>
    props.primary && //primary 가 존재할 경우
    css`
      background-color: white;
      color: black;
    `}
`;

export default TestEmotion;
