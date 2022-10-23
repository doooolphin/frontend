import CapsuleFilter from '@components/Common/Filter/CapsuleFilter';

export default {
  title: 'Doolphin/Filter',
  component: CapsuleFilter,
  argTypes: {
    onClick: { action: 'onClick' },
    onClickReset: { action: 'onClickReset' }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <CapsuleFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  categorys: [
    { code: 1, name: '기본순', dropdown: true },
    { code: 1, name: '쿠폰' },
    { code: 2, name: '1인분' },
    { code: 3, name: '배달팁', dropdown: true, active: true },
    { code: 4, name: '별점', dropdown: true },
    { code: 5, name: '최소주문금액', dropdown: true },
    { code: 5, name: '기타' }
  ]
};
