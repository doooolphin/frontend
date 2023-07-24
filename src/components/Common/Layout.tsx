import Header from '@components/Common/Header/Header';
import Footer from '@components/Common/Footer';
import { width } from '@styles/common';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize/dist/emotion-serialize.cjs';

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding: 50px 20px 70px 20px;
`;

const widthStyle = css`
  max-width: ${width.maxContainer};
  min-width: ${width.minContainer};
  margin: 0 auto;
`;

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  innerStyle?: Interpolation<Theme>;
};

const Layout = ({ header, footer, title, children, innerStyle }: Props) => {
  return (
    <Container css={widthStyle}>
      {header ?? <Header css={widthStyle} title={title} />}
      <Inner css={innerStyle}>{children}</Inner>
      {footer ?? <Footer css={widthStyle} />}
    </Container>
  );
};

export default Layout;
