const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/i,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env'],
          ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]
        ],
        plugins: ['@emotion']
      }
    });
    config.resolve.extensions.push('.js', '.jsx');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      'emotion-theming': toPath('node_modules/@emotion/react')
    };
    return config;
  }
};
