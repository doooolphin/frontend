import Header from '@components/Common/Header';

export default {
  title: 'Doolphin/Header',
  component: Header,
  args: {
    address: 'E편한세상광주역5단지'
  }
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

const MainTemplate = (args) => <Header main {...args} />;

export const Main = MainTemplate.bind({});

Main.args = {
  hasNotice: true
};
