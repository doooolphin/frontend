import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Child = styled('div')`
  color: red;
`;

const Parent = styled('div')`
  ${Child} {
    color: green;
  }
`;

const Link = styled('a')`
  color: red;
`;

const CssProp = ({ children }: { children: React.ReactNode }) => (
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

const testEmotion = () => {
  return (
    <CssProp>
      <Link>
        <Child>styled div</Child>
      </Link>
      <Child>styled div</Child>
    </CssProp>
  );
};

export default testEmotion;
