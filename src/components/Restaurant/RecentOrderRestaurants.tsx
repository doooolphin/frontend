import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { color, fontSize } from '@styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';
import { RightOutlined } from '@ant-design/icons';
import Rating from '@components/Restaurant/Rating';
import DeliveryTime from '@components/Restaurant/DeliveryTime';
import { Restaurant } from '@models/restaurant';
import NotifyTag from '@components/Restaurant/NotifyTag';

const recentOrderCss = {
  wrap: css`
    padding: 10px;
    height: 270px;
  `,
  menuWrap: css`
    margin: 5px;
    box-shadow: 1px 5px 8px 0 #eee;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 270px;
  `,
  foodWrap: css`
    display: flex;
    width: 100%;
    height: 120px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    flex: 1;
  `,
  foodContentWrap: css`
    display: flex;
    flex-direction: column;
    padding: 10px;
    clear: both;
  `,
  content: css`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
  `,
  title: css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
    font-size: ${fontSize.h1};
    flex: 1;
  `,
  label: css`
    font-size: 13px;
    margin-right: 5px;
  `,

  gray: css`
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
    padding: 0 5px;
  `,
  mainTitle: css`
    font-size: ${fontSize.h1};
    font-weight: bold;
  `,
  breakDown: css`
    font-size: ${fontSize.h2};
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
    arrows: true,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2, // 530px 이하의 화면
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div css={recentOrderCss.wrap}>
      <div css={recentOrderCss.header}>
        <div css={recentOrderCss.mainTitle}>최근에 주문했어요</div>
        <div css={recentOrderCss.breakDown}>
          주문내역 보기
          <RightOutlined />
        </div>
      </div>
      <Slider {...settings}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.code}>
            <div css={recentOrderCss.menuWrap}>
              <div css={recentOrderCss.foodWrap}>
                <Image
                  width={200}
                  height={200}
                  css={recentOrderCss.image}
                  src={restaurant.mainImage}
                  alt={restaurant.alt}
                />
              </div>
              <div css={recentOrderCss.foodContentWrap}>
                <div css={recentOrderCss.content}>
                  <div css={recentOrderCss.title}>{restaurant.title}</div>
                  <Rating score={restaurant.score} />
                </div>
                <div css={recentOrderCss.content}>
                  <div css={recentOrderCss.label}>
                    <span css={recentOrderCss.gray}>배달팁</span> {restaurant.accTip}
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
    </div>
  );
};

export default RecentOrderRestaurants;
