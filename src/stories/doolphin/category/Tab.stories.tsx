import CapsuleTab from '@components/Common/Tab/CapsuleTab';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CapsuleTab> = {
  component: CapsuleTab
};

export default meta;

type Story = StoryObj<typeof CapsuleTab>;

export const Primary: Story = {
  args: {
    categories: [
      { code: 1, name: '배달', active: true },
      { code: 2, name: '돌핀1' },
      { code: 3, name: '포장' },
      { code: 4, name: '쇼핑라이브' },
      { code: 5, name: '선물하기' },
      { code: 6, name: '전국별미' }
    ]
  },
  argTypes: {
    onClick: { action: 'onClick' }
  }
};
