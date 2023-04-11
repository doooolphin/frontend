import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { color } from '@styles/common';
import StarScore from '../Unit/StarScore';
import DeliveryTime from '../Unit/DeliveryTime';
import DistinctCard from '../Unit/DistinctCard';

const MenuWrap = styled.div`
  width: 93%;
  margin: 20px auto;
  box-shadow: 1px 5px 8px 0px #eee;
  border-radius: 10px;
`;
const FoodWrap = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const MainImage = styled.div`
  flex: ${(props) => (props.idx > 1 ? 2 : 1)};
  height: 100%;
`;
const FoodSubWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  justify-content: space-between;
  margin-left: 1px;
`;
const SubImage = styled.div`
  flex: 1;
  margin-bottom: ${(props) => (props.isTop ? '1px' : 'none')};
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
  font-size: 18px;
`;
const Score = styled.div`
  margin-right: 10px;
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
  color: ${color.gray};
`;

const Bold = styled.span`
  font-weight: bold;
  color: ${color.gray};
`;

const menuList = ({ menuList }) => {
  //console.log(menuList);
  return (
    <div>
      {menuList.map((list) => (
        <MenuWrap key={list.code}>
          <FoodWrap>
            <MainImage idx={list.image.length}>
              <Img src={list.image[0]} alt={list.image[0]} />
            </MainImage>
            {list.image.length > 1 && (
              <FoodSubWrap>
                <SubImage isTop={true}>
                  <Img src={list.image[1]} alt={list.image[1]} />
                </SubImage>
                <SubImage>
                  <Img src={list.image[2]} alt={list.image[2]} />
                </SubImage>
              </FoodSubWrap>
            )}
          </FoodWrap>
          <FoodContentWrap>
            <Content>
              <Title>{list.title}</Title>
              <Score>
                <StarScore />
                {list.score}
              </Score>
              <TimeWrap>
                <DeliveryTime />
                {list.time}
              </TimeWrap>
            </Content>
            <Content>
              <Label>
                <Gray>최소주문</Gray> {list.minOrderAcc}원 <Bold>·</Bold>
              </Label>
              <Label>
                <Gray>배달팁</Gray> {list.accTip} <Bold>·</Bold>
              </Label>
              <Label>{list.distance}</Label>
            </Content>
            <Content>
              <DistinctCard cardNm={list.card} />
            </Content>
          </FoodContentWrap>
        </MenuWrap>
      ))}
    </div>
  );
};

menuList.propTypes = {
  menuList: PropTypes.array,
  onClick: PropTypes.func
};

export default menuList;
