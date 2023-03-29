import PropTypes from 'prop-types';
import Header from '@components/Common/Header';
import Footer from '@components/Common/Footer';
import { width } from '@styles/common';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding: 50px 30px 70px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => (props.component === 'signUpAuth' ? 'none' : '100vh')};
`;

const widthStyle = css`
  max-width: ${width.maxContainer};
  min-width: ${width.minContainer};
  margin: 0 auto;
`;

const Layout = ({ header, footer, title, children, component }) => {
  return (
    <Container css={widthStyle}>
      {header ?? <Header css={widthStyle} title={title} />}
      <Inner component={component}>{children}</Inner>
      {footer ?? <Footer css={widthStyle} />}
    </Container>
  );
};

Layout.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  component: PropTypes.string
};

export default Layout;
