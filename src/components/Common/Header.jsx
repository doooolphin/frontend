import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import BackButton from './Button/BackButton';
import InfoButton from './Button/InfoButton';
import MenuButton from './Button/MenuButton';
import NoticeButton from './Button/NoticeButton';

const HeaderWrapper = styled.header`
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${(props) => (props.main ? '#c275cf' : '#ffffff')};
  color: ${(props) => (props.main ? '#ffffff' : '#000000')};
  z-index: 300;
  display: flex;
  padding: 13px 14px;
  align-items: center;
  justify-content: space-between;
`;

const Address = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    font-size: 17px;
    width: 150px;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    margin-bottom: 2px;
    > path {
      fill: ${(props) => (props.main ? '#ffffff' : '#323232')};
    }
  }
`;

const Header = ({ main, address, hasNotice }) => {
  return (
    <HeaderWrapper main={main}>
      <div>{main ? <MenuButton /> : <BackButton />}</div>
      <Address main={main}>
        <span>{address}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.11997 9.29L12 13.17L15.88 9.29C16.27 8.9 16.9 8.9 17.29 9.29C17.68 9.68 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69997 10.7C6.30997 10.31 6.30997 9.68 6.69997 9.29C7.08997 8.91 7.72997 8.9 8.11997 9.29Z"
            fill="#323232"
          />
        </svg>
      </Address>
      <div>
        {main && (
          <>
            <NoticeButton hasNotice={hasNotice} />
            <InfoButton />
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  main: PropTypes.bool,
  address: PropTypes.string,
  hasNotice: PropTypes.bool
};
export default Header;
