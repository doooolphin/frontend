import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import BackButton from './Button/BackButton';
import InfoButton from './Button/InfoButton';
import MenuButton from './Button/MenuButton';
import NoticeButton from './Button/NoticeButton';
import SearchInput from './SearchInput/SearchInput';
import { color } from '@styles/common';
const HeaderWrapper = styled.header`
  position: fixed;
  height: ${(props) => (props.search ? '100px' : '50px')};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 13px 14px;
  z-index: 300;
  background-color: ${(props) => (props.main ? color.primary : '#ffffff')};
  color: ${(props) => (props.main ? '#ffffff' : '#000000')};
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBottom = styled.div`
  width: 100%;
  color: #000;
`;

const Address = styled.div`
  position: absolute;
  top: ${(props) => (props.search ? '30%' : '50%')};
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
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h2`
  font-size: 17px;
`;

const Header = ({ main, search, title, address, hasNotice, ...props }) => {
  const navigate = useNavigate();
  const onClickAddress = () => {
    //TODO:
  };
  const onClickBack = () => {
    navigate(-1);
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
    <HeaderWrapper main={main} search={search} {...props}>
      <HeaderTop>
        <div>{main ? <MenuButton onClick={onClickMenu} /> : <BackButton onClick={onClickBack} />}</div>
        {title ? (
          <Title>{title}</Title>
        ) : (
          <Address main={main} search={search} onClick={onClickAddress}>
            <span>{address}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.11997 9.29L12 13.17L15.88 9.29C16.27 8.9 16.9 8.9 17.29 9.29C17.68 9.68 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69997 10.7C6.30997 10.31 6.30997 9.68 6.69997 9.29C7.08997 8.91 7.72997 8.9 8.11997 9.29Z"
                fill="#323232"
              />
            </svg>
          </Address>
        )}

        <div>
          {main && (
            <>
              <NoticeButton hasNotice={hasNotice} onClick={onClickNotice} />
              <InfoButton onClick={onClickInfo} />
            </>
          )}
        </div>
      </HeaderTop>
      {search && (
        <HeaderBottom>
          <SearchInput />
        </HeaderBottom>
      )}
    </HeaderWrapper>
  );
};

Header.propTypes = {
  main: PropTypes.bool,
  search: PropTypes.bool,
  title: PropTypes.string,
  address: PropTypes.string,
  hasNotice: PropTypes.bool
};

export default Header;
