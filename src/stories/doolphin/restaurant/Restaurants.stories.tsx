import { Meta, StoryObj } from '@storybook/react';
import Restaurants from '@components/Restaurant/Restaurants';

const meta: Meta<typeof Restaurants> = {
  component: Restaurants
};
export default meta;

type Story = StoryObj<typeof Restaurants>;

export const Primary: Story = {
  args: {
    restaurants: [
      {
        code: 1,
        mainImage: 'doooolphinBanner1.png',
        images: ['/doooolphinBanner1.png', '/doooolphinBanner1.png'],
        alt: 'banner1',
        title: '대박 햄버거 치킨 피자 패스트푸드1',
        score: '4.9',
        time: '38~53분',
        minOrderAcc: '12,000',
        accTip: '500원~4,500원',
        distance: '0.5km',
        useCoupon: true
      },
      {
        code: 2,
        mainImage: 'doooolphinBanner2.png',
        alt: 'banner2',
        title: '닭발이 맛있는 집',
        score: '4.5',
        time: '38~53분',
        minOrderAcc: '10,000',
        accTip: '900원~3,500원',
        distance: '2.5km',
        isNew: true
      },
      {
        code: 3,
        mainImage: 'doooolphinBanner3.png',
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
        mainImage: 'doooolphinBanner4.png',
        alt: 'banner4',
        title: '수제 칼국수 맛집',
        score: '4.9',
        time: '38~53분',
        minOrderAcc: '12,000',
        accTip: '500원~4,500원',
        distance: '0.5km'
      }
    ]
  }
};
