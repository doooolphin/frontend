import Header from '../../components/Common/Header';

export default {
  title: 'Doolphin/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  address: 'E편한세상광주역5단지'
};
