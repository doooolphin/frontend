import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Card = styled.span`
  ${(props) =>
    props.cardNm === '쿠폰' ? 'background: #ffebce; color: #7e4b00;' : 'background: #ffd9ec; color: #8f0035;'}
  width: 34px;
  height: 20px;
  font-size: 12px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const DistinctCard = (props) => {
  return <Card cardNm={props.cardNm}>{props.cardNm}</Card>;
};

DistinctCard.propTypes = {
  cardNm: PropTypes.string
};

export default DistinctCard;
