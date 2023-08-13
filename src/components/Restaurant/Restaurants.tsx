import { color } from '@styles/common';
import Image from 'next/image';
import { css } from '@emotion/react';
import Rating from '@components/Restaurant/Rating';
import DeliveryTime from '@components/Restaurant/DeliveryTime';
import { Restaurant } from '@models/restaurant';
import NotifyTag from '@components/Restaurant/NotifyTag';

const restaurantsCss = {
  wrap: css`
    width: 93%;
    margin: 20px auto;
    box-shadow: 1px 5px 8px 0 #eee;
    border-radius: 10px;
  `,
  foodWrap: css`
    display: flex;
    width: 100%;
    height: 140px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  `,
  mainImageWrap: css`
    height: 100%;
    flex: 2;
  `,
  subImageWrap: css`
    flex: 1;
  `,
  image: css`
    width: 100%;
    height: 100%;
  `,
  foodSubWrap: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    justify-content: space-between;
    margin-left: 1px;
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
    width: 55%;
    font-weight: bold;
    font-size: 18px;
  `,
  rating: css`
    margin-right: 10px;
  `,
  label: css`
    font-size: 13px;
    margin-right: 5px;
  `,
  gray: css`
    color: ${color.darkGray};
  `,
  bold: css`
    font-weight: bold;
    color: ${color.gray};
  `
};

type Props = {
  restaurants: Restaurant[];
};

const Restaurants = ({ restaurants }: Props) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <div css={restaurantsCss.wrap} key={restaurant.code}>
          <div css={restaurantsCss.foodWrap}>
            <div css={restaurantsCss.mainImageWrap}>
              <Image css={restaurantsCss.image} src={restaurant.mainImage} alt={restaurant.mainImage} />
            </div>
            {restaurant.images && restaurant.images.length > 1 && (
              <div css={restaurantsCss.foodSubWrap}>
                <div
                  css={[
                    restaurantsCss.subImageWrap,
                    css`
                      margin-bottom: 1px;
                    `
                  ]}
                >
                  <Image css={restaurantsCss.image} src={restaurant.images[0]} alt={restaurant.images[0]} />
                </div>
                <div css={restaurantsCss.subImageWrap}>
                  <Image css={restaurantsCss.image} src={restaurant.images[1]} alt={restaurant.images[1]} />
                </div>
              </div>
            )}
          </div>
          <div css={restaurantsCss.foodContentWrap}>
            <div css={restaurantsCss.content}>
              <span css={restaurantsCss.title}>{restaurant.title}</span>
              <Rating css={restaurantsCss.rating} score={restaurant.score} />
              <DeliveryTime time={restaurant.time} />
            </div>
            <div css={restaurantsCss.content}>
              <span css={restaurantsCss.label}>
                <span css={restaurantsCss.gray}>최소주문</span> {restaurant.minOrderAcc}원{' '}
                <strong css={restaurantsCss.bold}>·</strong>
              </span>
              <span css={restaurantsCss.label}>
                <span css={restaurantsCss.gray}>배달팁</span> {restaurant.accTip}{' '}
                <strong css={restaurantsCss.bold}>·</strong>
              </span>
              <span css={restaurantsCss.label}>{restaurant.distance}</span>
            </div>
            <div css={restaurantsCss.content}>
              {restaurant.isNew && <NotifyTag type="new" />}
              {restaurant.useCoupon && <NotifyTag type="coupon" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
