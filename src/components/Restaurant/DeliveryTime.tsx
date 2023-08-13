import { FieldTimeOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const deliveryTimeCss = {
  wrap: css`
    font-size: 13px;
    background: #eee;
    border-radius: 10px;
    padding: 0 5px;
  `,
  icon: css`
    margin-right: 3px;
  `
};

type Props = {
  time: string;
};

const DeliveryTime = ({ time }: Props) => {
  return (
    <div css={deliveryTimeCss.wrap}>
      <FieldTimeOutlined css={deliveryTimeCss.icon} />
      {time}
    </div>
  );
};

export default DeliveryTime;
