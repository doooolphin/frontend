import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { color, fontSize } from '@styles/common';
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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // 768px 이상의 화면
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // 480px 이하의 화면
          slidesToScroll: 2
        }
      }
    ]
  };

  const MenuWrap = styled.div`
    margin: 5px;
    box-shadow: 1px 5px 8px 0px #eee;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 270px;
  `;
  const FoodWrap = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    flex: 1;
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
    font-weight: bold;
    font-size: ${fontSize.h1};
    flex: 1;
  `;
  const Score = styled.div`
    font-weight: bold;
  `;
  const Label = styled.div`
    font-size: 13px;
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
    color: ${color.darkGray};
  `;
  const Img = styled.img`
    object-fit: cover;
    width: 100%;
  `;
  const Wrap = styled.div`
    padding: 10px;
  `;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
  `;
  const MainTitle = styled.div`
    font-size: ${fontSize.h1};
    font-weight: bold;
  `;
  const BreakDown = styled.div`
    font-size: ${fontSize.h2};
    color: ${color.darkGray};
    font-weight: bold;
    &::after {
      content: '>';
      font-family: 'Trebuchet MS';
    }
  `;
  return (
    <Wrap className="RecentOrderList">
      <Header>
        <MainTitle>최근에 주문했어요</MainTitle>
        <BreakDown>주문내역 보기</BreakDown>
      </Header>
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
