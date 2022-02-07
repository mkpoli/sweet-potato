const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  typescript: { reactDocgen: false },
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/theme/stories/*.stories.mdx',
    '../src/theme/stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal(config) {
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];

    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];
    return config;
  },
};
