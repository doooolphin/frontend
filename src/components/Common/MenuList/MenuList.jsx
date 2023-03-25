import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { StarFilled, FieldTimeOutlined } from '@ant-design/icons';
const MenuWrap = styled.div`
  width: 90%;
  margin: 20px auto;
  box-shadow: 1px 5px 8px 0px #eee;
  border-radius: 10px;
`;
const FoodWrap = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const MainImage = styled.div`
  width: ${(props) => (props.idx > 1 ? '70%' : '100%')};
  float: left;
  height: 100%;
`;
const FoodSubWrap = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 29%;
  justify-content: space-between;
`;
const SubImage = styled.div`
  height: 49%;
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
  color: #666;
`;
const Star = styled(StarFilled)`
  margin-right: 3px;
  color: #ffd600;
`;
const Time = styled(FieldTimeOutlined)`
  margin-right: 3px;
`;

const Card = styled.span`
  background: #ffebce;
  width: 30px;
  height: 16px;
  font-size: 6px;
  margin-right: 5px;
  color: #e69601;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const menuList = ({ menuList }) => {
  //console.log(menuList);
  return (
    <div>
      {menuList.map((list) => (
        <MenuWrap key={list.code}>
          <FoodWrap>
            <MainImage idx={list.image.length}>
              <Img src={list.image[0]} />
            </MainImage>
            {list.image.length > 1 ? (
              <FoodSubWrap>
                <SubImage>
                  <Img src={list.image[1]} />
                </SubImage>
                <SubImage>
                  <Img src={list.image[2]} />
                </SubImage>
              </FoodSubWrap>
            ) : null}
          </FoodWrap>
          <FoodContentWrap>
            <Content>
              <Title>{list.title}</Title>
              <Score>
                <Star />
                {list.score}
              </Score>
              <TimeWrap>
                <Time />
                {list.time}
              </TimeWrap>
            </Content>
            <Content>
              <Label>
                <Gray>최소주문</Gray> {list.minOrderAcc}원 ·
              </Label>
              <Label>
                <Gray>배달팁</Gray> {list.accTip} ·
              </Label>
              <Label>{list.distance}</Label>
            </Content>
            <Content>
              <Card>{list.card}</Card>
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
