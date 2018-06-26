const path = require('path');

module.exports = baseConfig => {
  baseConfig.module.rules.push({
    test: [/\.stories\.tsx?$/, /index\.ts$/, /\.s?css$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader'), "style-loader", "css-loader?modules", "sass-loader"],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });

  return baseConfig;
};