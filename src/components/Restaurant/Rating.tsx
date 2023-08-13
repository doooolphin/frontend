import { StarFilled } from '@ant-design/icons';
import { css } from '@emotion/react';

const ratingCss = {
  wrap: css`
    font-weight: bold;
  `,
  star: css`
    margin-right: 3px;
    color: #ffd600;
  `
};

type Props = {
  score: string;
  className?: string;
};

const Rating = ({ score, className }: Props) => {
  return (
    <div css={ratingCss.wrap} className={className}>
      <StarFilled css={ratingCss.star} />
      {score}
    </div>
  );
};

export default Rating;
