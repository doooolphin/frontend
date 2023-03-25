import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { useState } from 'react';

const SliderNum = styled.div`
  background: #000;
  opacity: 50%;
  border-radius: 10px;
  width: 35px;
  position: absolute;
  top: 83px;
  right: 5px;
`;

const SliderFont = styled.div`
  font-size: 10px;
  display: flex;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerSlider = ({ banners, onClick }) => {
  console.log(banners);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setBannerIdx(index + 1)
  };

  const [bannerIdx, setBannerIdx] = useState('1');

  return (
    <div>
      <Slider {...settings}>
        {banners.map((banner) => (
          <>
            <div key={banner.code} onClick={() => onClick(banner)}>
              <img src={banner.image} alt={banner.alt}></img>
            </div>
          </>
        ))}
      </Slider>
      <SliderNum>
        <SliderFont>
          {bannerIdx}/{banners.length}
        </SliderFont>
      </SliderNum>
    </div>
  );
};

BannerSlider.propTypes = {
  banners: PropTypes.array,
  onClick: PropTypes.func
};

export default BannerSlider;
