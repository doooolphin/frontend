import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackButton from '../Button/BackButton';
import { css } from '@emotion/react';
import { color } from '@styles/common';

const headerCss = {
  wrap: css`
    position: fixed;
    height: 50px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 300;
    display: flex;
    padding: 13px 14px;
    align-items: center;
    justify-content: space-between;
    background-color: ${color.white};
    color: ${color.black};
  `,
  title: css`
    position: absolute;
    font-size: 17px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
};

const Header = ({ left, title, center, right, ...props }) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <header css={headerCss.wrap} {...props}>
      <div> {left || <BackButton onClick={onClickBack} />}</div>
      <div>
        {title && <h2 css={headerCss.title}>{title}</h2>} {center}
      </div>
      <div>{right}</div>
    </header>
  );
};

Header.propTypes = {
  left: PropTypes.node,
  title: PropTypes.string,
  center: PropTypes.node,
  right: PropTypes.node
};

export default Header;
