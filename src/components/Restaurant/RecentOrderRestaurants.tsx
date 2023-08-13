import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { color } from '@styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';
import { RightOutlined } from '@ant-design/icons';
import Rating from '@components/Restaurant/Rating';
import DeliveryTime from '@components/Restaurant/DeliveryTime';
import { Restaurant } from '@models/restaurant';
import NotifyTag from '@components/Restaurant/NotifyTag';

const recentOrderCss = {
  menuWrap: css`
    margin: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
  `,
  imageWrap: css`
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
  `,
  ContentWrap: css`
    display: flex;
    flex-direction: column;
    padding-block: 10px;
    gap: 5px;
  `,
  content: css`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  title: css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
    font-size: 12px;
    flex: 1;
  `,
  rating: css`
    font-size: 12px;
  `,
  label: css`
    font-size: 12px;
  `,
  contentName: css`
    color: ${color.darkGray};
  `,
  image: css`
    object-fit: cover;
    width: 100%;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  `,
  mainTitle: css`
    font-size: 15px;
    font-weight: bold;
  `,
  orderLink: css`
    font-size: 13px;
    color: ${color.darkGray};
    font-weight: bold;
  `
};

type Props = {
  restaurants: Restaurant[];
};

const RecentOrderRestaurants = ({ restaurants }: Props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    draggable: true,
    speed: 500,
    variableWidth: true
  };

  return (
    <>
      <div css={recentOrderCss.header}>
        <div css={recentOrderCss.mainTitle}>최근에 주문했어요</div>
        <div css={recentOrderCss.orderLink}>
          주문내역 보기
          <RightOutlined />
        </div>
      </div>
      <Slider {...settings}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.code}>
            <div css={recentOrderCss.menuWrap} style={{ width: 150 }}>
              <div css={recentOrderCss.imageWrap}>
                <Image
                  width={200}
                  height={200}
                  layout="responsive"
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                  css={recentOrderCss.image}
                  src={restaurant.mainImage}
                  alt={restaurant.alt}
                />
              </div>
              <div css={recentOrderCss.ContentWrap}>
                <div css={recentOrderCss.content}>
                  <div css={recentOrderCss.title}>{restaurant.title}</div>
                  <Rating score={restaurant.score} css={recentOrderCss.rating} />
                </div>
                <div css={recentOrderCss.content}>
                  <div css={recentOrderCss.label}>
                    <span css={recentOrderCss.contentName}>배달팁</span> {restaurant.accTip}
                  </div>
                  <div css={recentOrderCss.label}>{restaurant.distance}</div>
                </div>
                <div css={recentOrderCss.content}>
                  {restaurant.isNew && <NotifyTag type="new" />}
                  {restaurant.useCoupon && <NotifyTag type="coupon" />}
                </div>
                <div css={recentOrderCss.content}>
                  <DeliveryTime time={restaurant.time} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default RecentOrderRestaurants;
