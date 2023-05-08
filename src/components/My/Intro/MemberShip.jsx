import { css } from '@emotion/react';
import { color } from '@styles/common';
import PropTypes from 'prop-types';

const membershipCss = {
  wrap: css`
    display: flex;
    padding: 5px 15px;
    align-items: center;
    justify-content: space-between;
    background-color: ${color.white};
    margin-bottom: 2px;
  `,
  text: css`
    width: 200px;
  `,
  button: css`
    background-color: #f6f6f6;
    padding: 5px 10px;
    border-radius: 25px;
    height: 30px;
    color: #505050;
  `
};

const Membership = ({ name, imageUrl }) => (
  <div css={membershipCss.wrap}>
    <span css={membershipCss.text}>
      <img src={imageUrl} alt={`${name} 출두요~!`} />
    </span>
    <button css={membershipCss.button}>등급별 혜택</button>
  </div>
);

Membership.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Membership;
