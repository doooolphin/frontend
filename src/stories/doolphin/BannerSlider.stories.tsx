import BannerSlider from '@components/Common/Slider/BannerSlider';
import { Banner } from '@models/banner';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BannerSlider> = {
  component: BannerSlider
};

export default meta;

type Story = StoryObj<typeof BannerSlider>;

export const Primary: Story = {
  args: {
    banners: [
      { code: 1, image: '/doooolphinBanner1.png', alt: 'banner1' },
      { code: 2, image: '/doooolphinBanner2.png', alt: 'banner2' },
      { code: 3, image: '/doooolphinBanner3.png', alt: 'banner3' },
      { code: 4, image: '/doooolphinBanner4.png', alt: 'banner4' },
      { code: 5, image: '/doooolphinBanner5.png', alt: 'banner5' },
      { code: 6, image: '/doooolphinBanner6.png', alt: 'banner6' }
    ]
  }
};
