import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const infoButtonCss = {
  wrap: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
  `,
  image: css`
    width: 23px;
  `
};

const InfoButton = ({ onClick }) => {
  return (
    <button css={infoButtonCss.wrap} onClick={onClick} aria-label="info">
      <img css={infoButtonCss.image} src="/info.png" alt="마이" />
    </button>
  );
};

InfoButton.propTypes = {
  onClick: PropTypes.func
};

export default InfoButton;
