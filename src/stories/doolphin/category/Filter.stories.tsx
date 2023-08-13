import CapsuleFilter from '@components/Common/Filter/CapsuleFilter';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CapsuleFilter> = {
  component: CapsuleFilter
};

export default meta;

type Story = StoryObj<typeof CapsuleFilter>;
export const Primary: Story = {
  args: {
    categories: [
      { code: 1, name: '기본순', dropdown: true },
      { code: 1, name: '쿠폰' },
      { code: 2, name: '1인분' },
      { code: 3, name: '배달팁', dropdown: true, active: true },
      { code: 4, name: '별점', dropdown: true },
      { code: 5, name: '최소주문금액', dropdown: true },
      { code: 5, name: '기타' }
    ]
  },
  argTypes: {
    onClick: { action: 'onClick' },
    onClickReset: { action: 'onClickReset' }
  }
};
