import PropTypes from 'prop-types';
import Header from '@components/Common/Header';
import Navigation from '@components/Common/Navigation';
import { width } from '@styles/common';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding-top: 50px;
  padding-bottom: 70px;
`;

const widthStyle = css`
  max-width: ${width.maxContainer};
  min-width: ${width.minContainer};
  margin: 0 auto;
`;

const Layout = ({ header, children }) => {
  return (
    <Container css={widthStyle}>
      {header || <Header css={widthStyle} />}
      <Inner>{children}</Inner>
      <Navigation css={widthStyle} />
    </Container>
  );
};

Layout.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node
};

export default Layout;
