import Header from '@components/Common/Header';
import { css } from '@emotion/react';
import Layout from '@components/Common/Layout';

const Main = () => {
  return (
    <Layout
      header={
        <Header
          css={css`
            max-width: inherit;
            margin: 0 auto;
          `}
          main
          hasNotice
          address="It's alright~ 우리집으로 가자~"
        />
      }
    >
      메인!
    </Layout>
  );
};

export default Main;
