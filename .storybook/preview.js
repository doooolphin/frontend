import GlobalStyle from '../src/components/Common/GlobalStyle';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withRouter } from 'storybook-addon-react-router-v6';

export const decorators = [
  withRouter,
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
];

const customViewports = {
  doooolphin: {
    name: 'doooolphin',
    styles: {
      width: '360px',
      height: '640px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    },
    defaultViewport: 'doooolphin'
  }
};
