import { css } from '@emotion/react';
import { NOTIFY_TAG_KEY, NOTIFY_TAG, NotifyTagKey } from '@models/restaurant';

const tagCss = {
  tag: css`
    width: 34px;
    height: 20px;
    font-size: 10px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  `,
  [NOTIFY_TAG_KEY.COUPON]: css`
    background: #ffebce;
    color: #7e4b00;
  `,
  [NOTIFY_TAG_KEY.NEW]: css`
    background: #ffd9ec;
    color: #8f0035;
  `
};

type Props = {
  type: NotifyTagKey;
};

const NotifyTag = ({ type }: Props) => {
  return <span css={[tagCss.tag, tagCss[type]]}>{NOTIFY_TAG[type]}</span>;
};

export default NotifyTag;
