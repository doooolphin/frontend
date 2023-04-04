import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { RightOutlined } from '@ant-design/icons';
import Layout from '@components/Common/Layout';
import { color } from '@styles/common';

const Section = styled.section`
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #9e9e9e3d;
`;

const My = () => {
  const infos = [
    { name: '포인트', iconUrl: '/icon/point.png', linkUrl: '' },
    { name: '쿠폰함', iconUrl: '/icon/coupon.png', linkUrl: '' },
    { name: '선물함', iconUrl: '/icon/gift.png', linkUrl: '' },
    { name: '찜', iconUrl: '/icon/like.png', linkUrl: '' },
    { name: '주문내역', iconUrl: '/icon/order.png', linkUrl: '' },
    { name: '리뷰관리', iconUrl: '/icon/review.png', linkUrl: '' }
  ];

  const sideInfos = [
    { name: '공지사항', linkUrl: '' },
    { name: '이벤트', linkUrl: '' },
    { name: '고객센터', linkUrl: '' },
    { name: '환경설정', linkUrl: '' },
    { name: '약관 및 정책', linkUrl: '' }
  ];

  //TODO: API 연동
  const userInfo = {
    nickname: '피카츄',
    profileUrl: '/profile-sample.png',
    membership: {
      name: '귀한분',
      imageUrl: '/membership-sample.png'
    }
  };

  return (
    <Layout
      footer={<></>}
      title="My돌핀"
      innerStyle={css`
        background-color: ${color.lightGray};
        padding-bottom: 0;
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background-color: ${color.lightGray};
        `}
      >
        <Section>
          <Profile
            nickname={userInfo.nickname}
            membership={userInfo.membership.name}
            profileUrl={userInfo.profileUrl}
          />
          <Membership name={userInfo.membership.name} imageUrl={userInfo.membership.imageUrl} />
          <Infos infos={infos} />
        </Section>
        <Section>
          <SideInfos sideInfos={sideInfos} />
        </Section>
        <div
          css={css`
            padding: 30px 15px;
            font-size: 14px;
            color: ${color.darkGray};
            display: flex;
            justify-content: center;
          `}
        >
          Copyright Doooolphin in Seoul, All Rights Reserved
        </div>
      </div>
    </Layout>
  );
};

const Profile = ({ nickname, membership, profileUrl }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      padding: 15px;
      gap: 15px;
      background-color: ${color.white};
      margin-bottom: 2px;
      cursor: pointer;
      > span:first-of-type {
        font-size: 20px;
        strong {
          color: ${color.darkGray};
        }
      }
      > span:last-of-type {
        position: absolute;
        right: 15px;
        font-size: 18px;
        font-weight: 200;
        color: ${color.darkGray};
      }
    `}
  >
    <div
      css={css`
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
      `}
    >
      <img src={profileUrl} alt={`${nickname}님`} />
    </div>
    <span>
      <strong>{membership}, </strong>
      {nickname}
    </span>
    <span>
      <RightOutlined />
    </span>
  </div>
);

Profile.propTypes = {
  nickname: PropTypes.string,
  membership: PropTypes.string,
  profileUrl: PropTypes.string
};

const Membership = ({ name, imageUrl }) => (
  <div
    css={css`
      display: flex;
      padding: 5px 15px;
      align-items: center;
      justify-content: space-between;
      background-color: ${color.white};
      margin-bottom: 2px;
      > span:first-of-type {
        width: 200px;
      }
      > button {
        background-color: #f6f6f6;
        padding: 5px 10px;
        border-radius: 25px;
        height: 30px;
        color: #505050;
      }
    `}
  >
    <span
      css={css`
        width: 200px;
      `}
    >
      <img src={imageUrl} alt={`${name} 출두요~!`} />
    </span>
    <button>등급별 혜택</button>
  </div>
);

Membership.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string
};

const Infos = ({ infos }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1px;
    `}
  >
    {infos.map((info) => (
      <Link key={info.name} to={info.linkUrl}>
        <div
          css={css`
            background-color: ${color.white};
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
            gap: 5px;
            span:first-of-type {
              width: 40px;
            }
          `}
        >
          <span>
            <img src={info.iconUrl} alt={info.name} />
          </span>
          <span>{info.name}</span>
        </div>
      </Link>
    ))}
  </div>
);

Infos.propTypes = {
  infos: PropTypes.array
};

const SideInfos = ({ sideInfos }) => (
  <div
    css={css`
      background-color: ${color.white};
      > div:not(:last-of-type) {
        border-bottom: 1px solid ${color.lightGray};
      }
    `}
  >
    {sideInfos.map((sideInfo) => (
      <div
        key={sideInfo.name}
        css={css`
          padding: 20px 15px;
          cursor: pointer;
          a > span:last-of-type {
            position: absolute;
            right: 15px;
            font-size: 18px;
            font-weight: 200;
            color: ${color.darkGray};
          }
        `}
      >
        <Link to={sideInfo.linkUrl}>
          <span>{sideInfo.name}</span>
          <span>
            <RightOutlined />
          </span>
        </Link>
      </div>
    ))}
  </div>
);

SideInfos.propTypes = {
  sideInfos: PropTypes.array
};

export default My;
