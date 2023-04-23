import { css } from '@emotion/react';
import { color } from '@styles/common';
import { Link } from 'react-router-dom';

const infos = [
  { name: '포인트', iconUrl: '/icon/point.png', linkUrl: '' },
  { name: '쿠폰함', iconUrl: '/icon/coupon.png', linkUrl: '' },
  { name: '선물함', iconUrl: '/icon/gift.png', linkUrl: '' },
  { name: '찜', iconUrl: '/icon/like.png', linkUrl: '' },
  { name: '주문내역', iconUrl: '/icon/order.png', linkUrl: '' },
  { name: '리뷰관리', iconUrl: '/icon/review.png', linkUrl: '' }
];

const infoCss = {
  wrap: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
  `,
  section: css`
    background-color: ${color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 5px;
  `,
  text: css`
    width: 40px;
  `
};

const Infos = () => (
  <div css={infoCss.wrap}>
    {infos.map((info) => (
      <Link key={info.name} to={info.linkUrl}>
        <div css={infoCss.section}>
          <span css={infoCss.text}>
            <img src={info.iconUrl} alt={info.name} />
          </span>
          <span>{info.name}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default Infos;
