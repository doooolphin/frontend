import MenuList from '@components/Common/MenuList/MenuList';

export default {
  title: 'Doolphin/menuList',
  component: MenuList,
  argTypes: {
    onClick: { action: 'onClick' }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuList: [
    {
      code: 1,
      image: ['doooolphinBanner1.png', 'doooolphinBanner1.png', 'doooolphinBanner1.png'],
      alt: 'banner1',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      minOrderAcc: '12,000',
      accTip: '500원~4,500원',
      distance: '0.5km',
      card: '쿠폰'
    },
    {
      code: 2,
      image: ['doooolphinBanner2.png'],
      alt: 'banner2',
      title: '닭발이 맛있는 집',
      score: '4.5',
      time: '38~53분',
      minOrderAcc: '10,000',
      accTip: '900원~3,500원',
      distance: '2.5km',
      card: '신규'
    },
    {
      code: 3,
      image: ['doooolphinBanner3.png'],
      alt: 'banner3',
      title: '돈까스 좋아해요?',
      score: '5.0',
      time: '38~53분',
      minOrderAcc: '12,000',
      accTip: '500원~4,500원',
      distance: '0.5km'
    },
    {
      code: 4,
      image: ['doooolphinBanner4.png'],
      alt: 'banner4',
      title: '수제 칼국수 맛집',
      score: '4.9',
      time: '38~53분',
      minOrderAcc: '12,000',
      accTip: '500원~4,500원',
      distance: '0.5km'
    }
  ]
};
