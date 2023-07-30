import { RightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { color } from '@styles/common';
import PropTypes from 'prop-types';

const profileCss = {
  wrap: css`
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 15px;
    background-color: ${color.white};
    margin-bottom: 2px;
    cursor: pointer;
  `,
  image: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  `,
  text: css`
    font-size: 20px;
    strong {
      color: ${color.darkGrayText};
    }
  `,
  button: css`
    position: absolute;
    right: 15px;
    font-size: 18px;
    font-weight: 200;
    color: ${color.darkGrayText};
  `
};

const Profile = ({ nickname, membership, profileUrl }) => (
  <div css={profileCss.wrap}>
    <div css={profileCss.image}>
      <img src={profileUrl} alt={`${nickname}님`} />
    </div>
    <span css={profileCss.text}>
      <strong>{membership}, </strong>
      {nickname}
    </span>
    <span css={profileCss.button}>
      <RightOutlined />
    </span>
  </div>
);

Profile.propTypes = {
  nickname: PropTypes.string,
  membership: PropTypes.string,
  profileUrl: PropTypes.string
};

export default Profile;
