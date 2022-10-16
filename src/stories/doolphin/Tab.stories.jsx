import CapsuleTab from '@components/Common/Tab/CapsuleTab';
import { useState } from 'react';

export default {
  title: 'Doolphin/Tab',
  component: CapsuleTab,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => {
  const [categorys, setCategorys] = useState([
    { code: 1, name: '배달', active: true },
    { code: 2, name: '돌핀1' },
    { code: 3, name: '포장' },
    { code: 4, name: '쇼핑라이브' },
    { code: 5, name: '선물하기' },
    { code: 6, name: '전국별미' }
  ]);

  const onClick = (activeCategory) => {
    setCategorys((prevCategorys) =>
      prevCategorys.map((category) => {
        category.active = category.code === activeCategory.code;
        return category;
      })
    );
  };
  return <CapsuleTab categorys={categorys} onClick={onClick} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
