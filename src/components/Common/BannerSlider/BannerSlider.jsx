import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './slick.css';
import './slick-theme.css';

const BannerSlider = ({ banners, onClick }) => {
  console.log(banners);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {banners.map((banner) => (
          <>
            <div onClick={() => onClick(banner)}>
              <img src={banner.image}></img>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

BannerSlider.propTypes = {
  banners: PropTypes.array,
  onClick: PropTypes.func
};

export default BannerSlider;
