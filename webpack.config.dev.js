const path = require(`path`);
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const SOURCE_PATH = path.resolve(__dirname, `src`);

module.exports = {
  mode: `development`,
  entry: `./src/app.js`,
  output: {
    filename: `bundle.js`,
    publicPath: `/`,
  },
  devtool: `inline-source-map`,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SOURCE_PATH,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `style-loader`,
            options: {
              sourceMap: true,
            },
          },
          {
            loader: `css-loader`,
            options: {
              sourceMap: true,
            },
          },
          {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
            },
          },
          {
            loader: `sass-loader`,
            options: {
              sourceMap: true,
              output: `expanded`,
              includePaths: [path.resolve(`src/css`)],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `assets/[path][name].[ext]`,
            },
          },
          {
            loader: `image-webpack-loader`,
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: `70-90`,
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: `Hearts of React` }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ],
  optimization: {
    // minimizer: [
    //   new UglifyJsPlugin()
    // ],
    noEmitOnErrors: true,
  },
};
