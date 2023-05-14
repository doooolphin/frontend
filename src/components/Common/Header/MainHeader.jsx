import PropTypes from 'prop-types';
import InfoButton from '../Button/InfoButton';
import MenuButton from '../Button/MenuButton';
import NoticeButton from '../Button/NoticeButton';
import Header from './Header';
import { css } from '@emotion/react';
import Address from './Address';
import { color } from '@styles/common';

const MainHeaderCss = {
  wrap: css`
    background-color: ${color.primary};
    color: ${color.white};
    svg {
      margin-bottom: 2px;
      > path {
        fill: ${color.white} };
      }
    }
  `,
  buttonWrap: css`
    display: flex;
  `
};

const MainHeader = ({ address, hasNotice }) => {
  const onClickAddress = () => {
    //TODO:
  };
  const onClickMenu = () => {
    //TODO:
  };
  const onClickNotice = () => {
    //TODO:
  };
  const onClickInfo = () => {
    //TODO:
  };

  return (
    <Header
      css={MainHeaderCss.wrap}
      left={<MenuButton onClick={onClickMenu} />}
      center={<Address address={address} onClickAddress={onClickAddress} />}
      right={
        <div css={MainHeaderCss.buttonWrap}>
          <NoticeButton hasNotice={hasNotice} onClick={onClickNotice} />
          <InfoButton onClick={onClickInfo} />
        </div>
      }
    />
  );
};

MainHeader.propTypes = {
  address: PropTypes.string,
  hasNotice: PropTypes.bool
};

export default MainHeader;
