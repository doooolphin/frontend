import BannerSlider from '@components/Common/BannerSlider/BannerSlider';

export default {
  title: 'Doolphin/BannerSlider',
  component: BannerSlider,
  argTypes: {
    onClick: { action: 'onClick' }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <BannerSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  banners: [
    { code: 1, image: 'doooolphinBanner1.png' },
    { code: 2, image: 'doooolphinBanner2.png' },
    { code: 3, image: 'doooolphinBanner3.png' },
    { code: 4, image: 'doooolphinBanner4.png' },
    { code: 5, image: 'doooolphinBanner5.png' },
    { code: 6, image: 'doooolphinBanner6.png' }
  ]
};
