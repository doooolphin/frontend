import Header from '@components/Common/Header';
import Navigation from '@components/Common/Navigation';
import PropTypes from 'prop-types';

const Layout = ({ address }) => (
  <>
    <Header address={address} />
    <Navigation />
  </>
);

Layout.propTypes = {
  address: PropTypes.string
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
