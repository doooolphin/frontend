import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

const CssProp = ({ children }) => (
  <div
    css={css`
      padding: 32px;
      background-color: yellow;
      border-radius: 4px;
      &:hover {
        background-color: white;
      }
    `}
  >
    {children}
  </div>
);

CssProp.propTypes = {
  children: PropTypes.node.isRequired
};

const testEmotion = () => {
  return (
    <CssProp>
      <Parent>
        <Child>styled div</Child>
      </Parent>
      <Child>styled div</Child>
    </CssProp>
  );
};

export default testEmotion;
