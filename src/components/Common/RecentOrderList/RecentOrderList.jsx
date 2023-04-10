import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { color } from '@styles/common';
import StarScore from '../Unit/StarScore';
import DeliveryTime from '../Unit/DeliveryTime';
import DistinctCard from '../Unit/DistinctCard';

const RecentOrderList = ({ orderLists, onClick }) => {
  console.log(orderLists);
  const settings = {
    dots: false,
    arrows: true,
    swipe: true,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  const MenuWrap = styled.div`
    width: 90%;
    margin: 20px auto;
    box-shadow: 1px 5px 8px 0px #eee;
    border-radius: 10px;
  `;
  const FoodWrap = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  `;

  const FoodContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    clear: both;
  `;
  const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
  `;
  const Title = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 55%;
    font-weight: bold;
  `;
  const Score = styled.div`
    margin-right: 10px;
    font-weight: bold;
  `;
  const Label = styled.div`
    font-size: 12px;
    margin-right: 5px;
  `;
  const TimeWrap = styled.div`
    font-size: 13px;
    margin-right: 5px;
    background: #eee;
    border-radius: 10px;
    padding: 0 5px;
  `;
  const Gray = styled.span`
    color: ${color.gray};
  `;
  const Img = styled.img`
    object-fit: cover;
    width: 100%;
  `;
  const Wrap = styled.div``;

  return (
    <Wrap className="RecentOrderList">
      <Slider {...settings}>
        {orderLists.map((orderList) => (
          <>
            <div key={orderList.code} onClick={() => onClick(orderList)}>
              <MenuWrap>
                <FoodWrap>
                  <Img src={orderList.image} alt={orderList.alt}></Img>
                </FoodWrap>
                <FoodContentWrap>
                  <Content>
                    <Title>{orderList.title}</Title>
                    <Score>
                      <StarScore />
                      {orderList.score}
                    </Score>
                  </Content>
                  <Content>
                    <Label>
                      <Gray>배달팁</Gray> {orderList.accTip}
                    </Label>
                    <Label>{orderList.distance}</Label>
                  </Content>
                  <Content>
                    <DistinctCard cardNm={orderList.card} />
                  </Content>
                  <Content>
                    <TimeWrap>
                      <DeliveryTime />
                      {orderList.time}
                    </TimeWrap>
                  </Content>
                </FoodContentWrap>
              </MenuWrap>
            </div>
          </>
        ))}
      </Slider>
    </Wrap>
  );
};

RecentOrderList.propTypes = {
  orderLists: PropTypes.array,
  onClick: PropTypes.func
};

export default RecentOrderList;
