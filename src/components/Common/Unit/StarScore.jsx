import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';

const Star = styled(StarFilled)`
  margin-right: 3px;
  color: #ffd600;
`;

const StarScore = () => {
  return <Star />;
};

export default StarScore;
