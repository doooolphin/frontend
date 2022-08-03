const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: './src/App.jsx',
  mode: isProduction ? 'production' : 'development',
  devtool: 'eval-cheap-module-source-map',
  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: 'initial'
    },
    minimize: isProduction,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: isProduction,
      template: './index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: ['last 1 chrome version'],
                debug: !isProduction
              }
            ],
            ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]
          ],
          plugins: [isProduction ? '' : 'react-refresh/babel', '@emotion']
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, `./src/assets`),
      '@hooks': path.resolve(__dirname, `./src/hooks`),
      '@components': path.resolve(__dirname, `./src/components`),
      '@pages': path.resolve(__dirname, `./src/pages`),
      '@utils': path.resolve(__dirname, `./src/utils`),
      '@routes': path.resolve(__dirname, `./src/routes`),
      '@styles': path.resolve(__dirname, `./src/styles`),
      '@services': path.resolve(__dirname, `./src/services`),
      '@constants': path.resolve(__dirname, `./src/constants`),
      '@mocks': path.resolve(__dirname, `./src/mocks`)
    }
  },
  devServer: {
    historyApiFallback: true,
    static: 'public',
    port: 3000,
    hot: true,
    open: true
  }
};

if (!isProduction && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin());
}

if (isProduction && config.plugins) {
  config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
}

module.exports = config;
