import GlobalStyle from '../src/components/Common/GlobalStyle';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import * as nextImage from 'next/image';
import { Preview } from '@storybook/react';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
});

const customViewports = {
  doooolphin: {
    name: 'doooolphin',
    styles: {
      width: '400px',
      height: '640px'
    }
  }
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    )
  ],
  parameters: {
    layout: 'fullscreen',
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
    },
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }]
      }
    }
  }
};

export default preview;
