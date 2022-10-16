import CapsuleTab from '@components/Common/Tab/CapsuleTab';

export default {
  title: 'Doolphin/Tab',
  component: CapsuleTab,
  argTypes: {
    onClick: { action: 'onClick' }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <CapsuleTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  categorys: [
    { code: 1, name: '배달', active: true },
    { code: 2, name: '돌핀1' },
    { code: 3, name: '포장' },
    { code: 4, name: '쇼핑라이브' },
    { code: 5, name: '선물하기' },
    { code: 6, name: '전국별미' }
  ]
};
