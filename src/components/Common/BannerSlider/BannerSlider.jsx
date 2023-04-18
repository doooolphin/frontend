import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { useState } from 'react';

const SliderWrap = styled.div`
  height: 100%;
  position: relative;
`;

const SliderNum = styled.div`
  background: #000;
  opacity: 60%;
  border-radius: 10px;
  width: 45px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

const SliderFont = styled.div`
  font-size: 14px;
  display: flex;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
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
      <SliderWrap>
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
      </SliderWrap>
    </div>
  );
};

BannerSlider.propTypes = {
  banners: PropTypes.array,
  onClick: PropTypes.func
};

export default BannerSlider;
