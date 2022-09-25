import Header from '@components/Common/Header';
import Navigation from '@components/Common/Navigation';
import PropTypes from 'prop-types';

const Layout = ({ main, address, hasNotice }) => (
  <>
    <Header address={address} main={main} hasNotice={hasNotice} />
    <Navigation />
  </>
);

Layout.propTypes = {
  main: PropTypes.bool,
  address: PropTypes.string,
  hasNotice: PropTypes.bool
};
export default {
  title: 'Doolphin/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen'
  }
};
const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  address: 'E편한세상광주역5단지'
};

const MainTemplate = (args) => <Layout main {...args} />;

export const Main = MainTemplate.bind({});

Main.args = {
  address: 'E편한세상광주역5단지',
  hasNotice: true
};
