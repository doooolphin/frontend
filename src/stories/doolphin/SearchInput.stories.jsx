import SearchInput from '@components/Common/SearchInput/SearchInput';

export default {
  title: 'Doolphin/SearchInput',
  component: SearchInput,
  // argTypes: {
  //   onClick: { action: 'onClick' }
  // },
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
