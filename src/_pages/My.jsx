import Layout from '@components/Common/Layout';
import { color } from '@styles/common';
import { css } from '@emotion/react';
import { Infos, Membership, Profile, SideInfos } from '@components/My/Intro';

const myCss = {
  layout: css`
    background-color: ${color.lightGrayBg};
    padding: 0;
    padding-top: 50px;
    min-height: 100vh;
  `,
  wrap: css`
    display: flex;
    flex-direction: column;
    background-color: ${color.lightGrayBg};
  `,
  section: css`
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px solid #9e9e9e3d;
  `,
  copyright: css`
    padding: 30px 15px;
    font-size: 14px;
    color: ${color.darkGrayText};
    display: flex;
    justify-content: center;
  `
};

const My = () => {
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
    <Layout footer={<></>} title="My돌핀" innerStyle={myCss.layout}>
      <div css={myCss.wrap}>
        <section css={myCss.section}>
          <Profile
            nickname={userInfo.nickname}
            membership={userInfo.membership.name}
            profileUrl={userInfo.profileUrl}
          />
          <Membership name={userInfo.membership.name} imageUrl={userInfo.membership.imageUrl} />
          <Infos />
        </section>
        <section css={myCss.section}>
          <SideInfos />
        </section>
        <div css={myCss.copyright}>Copyright Doooolphin in Seoul, All Rights Reserved</div>
      </div>
    </Layout>
  );
};

export default My;
