const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    }
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    assetModuleFilename: 'assets/[name]__[hash][ext][query]',
    clean: true,
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name][local][hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: 'asset',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'build/favicon.ico'),
          noErrorOnMissing: true
        },
        {
          from: path.resolve(__dirname, 'public/static/'),
          to: path.resolve(__dirname, 'build/static/'),
          noErrorOnMissing: true
        },
      ]
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
    }),
    new CompressionPlugin({
      filename: '[path][base].gz', // Ім'я згенерованого файлу
      algorithm: 'gzip', // Алгоритм компресії
      test: /\.(js|css|html|svg|jpg|jpeg|png|webp)$/, // Які файли компресувати
      threshold: 10240, // Мінімальний розмір файлу для компресії (10 КБ)
      minRatio: 0.8, // Компресувати, якщо співвідношення стиснення < 0.8
    }),
  ].concat(NODE_ENV === 'development' ? [] : [new MiniCssExtractPlugin()]),
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      maxSize: 1000000,
      minSize: 500000,
      chunks: 'all',
      cacheGroups: {
        runtimeChunk: 'single',
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
};