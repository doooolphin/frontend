import Layout from '@components/Common/Layout';
import styled from '@emotion/styled';
import Header from '@components/Common/Header';
import { css } from '@emotion/react';
import BannerSlider from '@components/Common/BannerSlider/BannerSlider';
import RecentOrderList from '@components/Common/RecentOrderList/RecentOrderList';

const OrderWrap = styled.div`
  margin: 70px 0 30px 0;
  display: flex;
`;

const DeliveryWrap = styled.div`
  border-radius: 10px;
  flex: 1;
  height: 250px;
  margin-right: ${(props) => (props.isPackaging ? '' : '20px')};
  box-shadow: 1px 3px 7px 0px #ddd;
`;

const BannerWrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const MyWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  box-shadow: 1px 0px 7px 0px #ddd;
  margin: 20px 0;
  height: 100px;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: ${(props) => (props.last ? 'none' : '1px solid #eee')};
`;

const Img = styled.img`
  width: 40px;
`;

const Home = () => {
  const bannerArgs = {
    banners: [
      { code: 1, image: 'doooolphinBanner1.png', alt: 'banner1' },
      { code: 2, image: 'doooolphinBanner2.png', alt: 'banner2' },
      { code: 3, image: 'doooolphinBanner3.png', alt: 'banner3' },
      { code: 4, image: 'doooolphinBanner4.png', alt: 'banner4' },
      { code: 5, image: 'doooolphinBanner5.png', alt: 'banner5' },
      { code: 6, image: 'doooolphinBanner6.png', alt: 'banner6' }
    ]
  };

  const orderListArgs = {
    orderLists: [
      {
        code: 1,
        image: 'food1.png',
        alt: 'food1',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        card: '쿠폰'
      },
      {
        code: 2,
        image: 'food2.png',
        alt: 'food2',
        title: '대박 도넛',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        card: '쿠폰'
      },
      {
        code: 3,
        image: 'food3.jpg',
        alt: 'food3',
        title: '대박 한식',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        card: '쿠폰'
      },
      {
        code: 4,
        image: 'food2.png',
        alt: 'food4',
        title: '맛집이에용',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        card: '쿠폰'
      }
    ]
  };
  return (
    <Layout
      header={
        <Header
          css={css`
            max-width: inherit;
            min-width: inherit;
            margin: 0 auto;
          `}
          main
          search
          hasNotice
          address="It's alright~ 우리집으로 가자~"
        />
      }
      footer={false}
    >
      <OrderWrap>
        <DeliveryWrap></DeliveryWrap>
        <DeliveryWrap isPackaging={true}></DeliveryWrap>
      </OrderWrap>
      <BannerWrap>
        <BannerSlider {...bannerArgs} />
      </BannerWrap>
      <MyWrap>
        <Item>
          <Img src="icon/pointBasic.png" />
          <span>포인트</span>
        </Item>
        <Item>
          <Img src="icon/couponBasic.png" />
          <span>쿠폰함</span>
        </Item>
        <Item>
          <Img src="icon/giftBasic.png" />
          <span>선물함</span>
        </Item>
        <Item last={true}>
          <Img src="icon/likeBasic.png" />
          <span>찜</span>
        </Item>
      </MyWrap>
      <RecentOrderList {...orderListArgs} />
    </Layout>
  );
};

export default Home;
