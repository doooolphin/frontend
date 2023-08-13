import { color } from '@styles/common';
import Image from 'next/image';
import { css } from '@emotion/react';
import Rating from '@components/Restaurant/Rating';
import DeliveryTime from '@components/Restaurant/DeliveryTime';
import { Restaurant } from '@models/restaurant';
import NotifyTag from '@components/Restaurant/NotifyTag';

const restaurantsCss = {
  wrap: css`
    margin: 20px auto;
    box-shadow: 1px 5px 8px 0 #eee;
    border-radius: 10px;
  `,
  imageSection: css`
    width: 100%;
    height: 140px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, auto));
    grid-template-rows: repeat(2, minmax(50%, auto));
    gap: 1px;
  `,
  mainImage: css`
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  `,
  image: css`
    width: 100%;
    height: 100%;
  `,
  foodContentWrap: css`
    display: flex;
    flex-direction: column;
    padding: 10px;
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
    width: 55%;
    font-weight: bold;
    font-size: 18px;
  `,
  rating: css`
    margin-right: 10px;
  `,
  label: css`
    font-size: 13px;
  `,
  contentName: css`
    color: ${color.darkGray};
  `,
  dots: css`
    ::after {
      content: '·';
      font-weight: bold;
      color: ${color.gray};
      margin: 0 5px;
    }
  `
};

type Props = {
  restaurants: Restaurant[];
};

const Restaurants = ({ restaurants }: Props) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <div css={restaurantsCss.wrap} key={restaurant.code}>
          <div css={restaurantsCss.imageSection}>
            <Image
              css={[restaurantsCss.image, restaurantsCss.mainImage]}
              src={restaurant.mainImage}
              alt={restaurant.mainImage}
            />
            {restaurant.images &&
              restaurant.images
                .slice(0, 2)
                .map((image, idx) => (
                  <Image key={`${image}_${idx}`} css={restaurantsCss.image} src={image} alt={image} />
                ))}
          </div>
          <div css={restaurantsCss.foodContentWrap}>
            <div css={restaurantsCss.content}>
              <span css={restaurantsCss.title}>{restaurant.title}</span>
              <Rating css={restaurantsCss.rating} score={restaurant.score} />
              <DeliveryTime time={restaurant.time} />
            </div>
            <div css={restaurantsCss.content}>
              <span css={[restaurantsCss.label, restaurantsCss.dots]}>
                <span css={restaurantsCss.contentName}>최소주문</span>
                {restaurant.minOrderAcc}원
              </span>
              <span css={[restaurantsCss.label, restaurantsCss.dots]}>
                <span css={restaurantsCss.contentName}>배달팁</span> {restaurant.accTip}
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
    </>
  );
};

export default Restaurants;
