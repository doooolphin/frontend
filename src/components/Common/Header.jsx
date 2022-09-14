import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderWrapper = styled.header`
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 300;
`;

const Header = ({ address }) => {
  return (
    <HeaderWrapper>
      <div
        css={css`
          display: flex;
          padding: 13px 14px;
          align-items: center;
          justify-content: space-between;
          height: inherit;
        `}
      >
        <a
          css={css`
            padding: 5px;
          `}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 6.99997H3.82998L8.70998 2.11997C9.09998 1.72997 9.09998 1.08997 8.70998 0.699971C8.31998 0.309971 7.68998 0.309971 7.29998 0.699971L0.70998 7.28997C0.31998 7.67997 0.31998 8.30997 0.70998 8.69997L7.29998 15.29C7.68998 15.68 8.31998 15.68 8.70998 15.29C9.09998 14.9 9.09998 14.27 8.70998 13.88L3.82998 8.99997H15C15.55 8.99997 16 8.54997 16 7.99997C16 7.44997 15.55 6.99997 15 6.99997Z"
              fill="#323232"
            />
          </svg>
        </a>
        <div
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <span
            css={css`
              font-size: 17px;
              width: 150px;
              line-height: normal;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            {address}
          </span>
          <svg
            css={css`
              margin-bottom: 2px;
            `}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.11997 9.29L12 13.17L15.88 9.29C16.27 8.9 16.9 8.9 17.29 9.29C17.68 9.68 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69997 10.7C6.30997 10.31 6.30997 9.68 6.69997 9.29C7.08997 8.91 7.72997 8.9 8.11997 9.29Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  address: PropTypes.string
};
export default Header;
