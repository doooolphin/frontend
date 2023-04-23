import RecentOrderList from '@components/Common/RecentOrderList/RecentOrderList';

export default {
  title: 'Doolphin/RecentOrderList',
  component: RecentOrderList,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <RecentOrderList {...args} />;

export const Default = Template.bind({});
Default.args = {
  orderLists: [
    {
      code: 1,
      image: 'food1.png',
      alt: 'food1',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 2,
      image: 'food2.png',
      alt: 'food2',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 3,
      image: 'food1.png',
      alt: 'food3',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 4,
      image: 'food2.png',
      alt: 'food4',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 5,
      image: 'food1.png',
      alt: 'food5',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 6,
      image: 'food2.png',
      alt: 'food6',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 7,
      image: 'food1.png',
      alt: 'food7',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 8,
      image: 'food2.png',
      alt: 'food8',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 9,
      image: 'food1.png',
      alt: 'food9',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 10,
      image: 'food2.png',
      alt: 'food10',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 11,
      image: 'food1.png',
      alt: 'food11',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    },
    {
      code: 12,
      image: 'food2.png',
      alt: 'food12',
      title: '대박 햄버거 치킨 피자 패스트푸드1',
      score: '4.9',
      time: '38~53분',
      accTip: '500원~4,500원',
      card: '쿠폰'
    }
  ]
};
