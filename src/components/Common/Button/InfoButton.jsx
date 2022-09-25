import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const InfoButton = ({ onClick }) => {
  return (
    <button
      css={css`
        padding: 5px;
        width: 30px;
      `}
      onClick={onClick}
    >
      <img src="/info.png" alt="마이" />
    </button>
  );
};

InfoButton.propTypes = {
  onClick: PropTypes.func
};

export default InfoButton;
