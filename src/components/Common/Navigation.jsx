import { css } from '@emotion/react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  position: fixed;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 300;
  box-shadow: 0px -1px 8px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: end;
  padding: 10px;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 40px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Button>
        <img src="/search.png" alt="검색" />
      </Button>
      <Button>
        <img src="/like.png" alt="찜" />
      </Button>
      <Button
        css={css`
          width: 60px;
        `}
      >
        <img src="/logo.png" alt="홈" />
      </Button>
      <Button>
        <img src="/order.png" alt="주문" />
      </Button>
      <Button>
        <img src="/my.png" alt="마이" />
      </Button>
    </FooterWrapper>
  );
};

export default Footer;
