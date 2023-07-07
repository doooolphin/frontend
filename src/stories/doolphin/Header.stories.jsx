import Address from '@components/Common/Header/Address';
import Header from '@components/Common/Header/Header';
import MainHeader from '@components/Common/Header/MainHeader';

export default {
  title: 'Doolphin/Header',
  component: Header
};

const Template = (args) => <Header {...args} />;
const AdressTemplate = (args) => <Header center={<Address address={args.address} />} />;
const MainTemplate = (args) => <MainHeader {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  title: '내 정보'
};

export const AddressStory = AdressTemplate.bind({});

AddressStory.args = {
  address: '역삼센터필드'
};

export const MainStory = MainTemplate.bind({});

MainStory.args = {
  address: '역삼센터필드',
  hasNotice: true
};
