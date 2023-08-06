import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Banner } from '@models/banner';
import Image from 'next/image';
import { color } from '@styles/common';

const sliderCss = {
  wrap: css`
    height: 100%;
    position: relative;
  `,
  image: css`
    border-radius: 10px;
    overflow: hidden;
  `,
  pagination: css`
    background: ${color.black};
    color: ${color.white};
    opacity: 60%;
    border-radius: 10px;
    width: 45px;
    text-align: center;
    position: absolute;
    right: 5px;
    bottom: 10px;
    font-size: 14px;
    font-weight: 600;
  `
};

type Props = {
  banners: Banner[];
};

const BannerSlider = ({ banners }: Props) => {
  const [bannerIdx, setBannerIdx] = useState(1);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setBannerIdx(index + 1)
  };

  return (
    <div css={sliderCss.wrap}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.code} css={sliderCss.image}>
            <Image
              src={banner.image}
              alt={banner.alt}
              width={600}
              height={172}
              layout="responsive"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        ))}
      </Slider>
      <div css={sliderCss.pagination}>
        {bannerIdx}/{banners.length}
      </div>
    </div>
  );
};

export default BannerSlider;
