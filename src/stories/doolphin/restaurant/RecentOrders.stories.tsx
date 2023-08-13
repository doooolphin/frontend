import { Meta, StoryObj } from '@storybook/react';
import RecentOrderRestaurants from '@components/Restaurant/RecentOrderRestaurants';

const meta: Meta<typeof RecentOrderRestaurants> = {
  component: RecentOrderRestaurants
};
export default meta;

type Story = StoryObj<typeof RecentOrderRestaurants>;

export const Primary: Story = {
  args: {
    restaurants: [
      {
        code: 1,
        mainImage: '/food1.png',
        alt: 'food1',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 2,
        mainImage: '/food2.png',
        alt: 'food2',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 3,
        mainImage: '/food1.png',
        alt: 'food3',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 4,
        mainImage: '/food2.png',
        alt: 'food4',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 5,
        mainImage: '/food1.png',
        alt: 'food5',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 6,
        mainImage: '/food2.png',
        alt: 'food6',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 7,
        mainImage: '/food1.png',
        alt: 'food7',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 8,
        mainImage: '/food2.png',
        alt: 'food8',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 9,
        mainImage: '/food1.png',
        alt: 'food9',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 10,
        mainImage: '/food2.png',
        alt: 'food10',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 11,
        mainImage: '/food1.png',
        alt: 'food11',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      },
      {
        code: 12,
        mainImage: '/food2.png',
        alt: 'food12',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        accTip: '500원~4,500원',
        useCoupon: true
      }
    ]
  }
};
