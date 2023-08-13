import Address from '@components/Common/Header/Address';
import Header from '@components/Common/Header/Header';
import { Meta, StoryObj } from '@storybook/react';
import MainHeader from '@components/Common/Header/MainHeader';

const meta: Meta<typeof Header> = {
  component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

export const DefaultHeader: Story = {
  args: {
    title: '내 정보'
  }
};

export const AddressHeader: Story = {
  args: {
    address: '역삼센터필드'
  },
  argTypes: {
    onClickAddress: { action: 'onClickAddress' }
  },
  render: (args) => <Header center={<Address address={args.address} onClickAddress={args.onClickAddress} />} />
};
type MainHeaderStory = StoryObj<typeof MainHeader>;
export const Main: MainHeaderStory = {
  args: {
    address: '역삼센터필드',
    hasNotice: true
  },
  render: (args) => <MainHeader {...args} />
};
