const path = require(`path`);
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

const SOURCE_PATH = path.resolve(__dirname, `src`);
const DIST_PATH = path.resolve(__dirname, `dist`);
const DEVSERVER_PORT = 3000;
const DEVSERVER_HOST = `localhost`;
// const DEVSERVER_HOST = `192.168.1.103`;
const DEVSERVER_ADDRESS = `http://${DEVSERVER_HOST}:${DEVSERVER_PORT}/`;

module.exports = {
  mode: `development`,
  entry: {
    main: [
      `webpack-dev-server/client?${DEVSERVER_ADDRESS}`,
      `webpack/hot/only-dev-server`,
      `./src/entry.js`,
    ],
  },
  output: {
    filename: `bundle.js`,
    path: DIST_PATH,
    publicPath: `/`,
  },
  resolve: {
    extensions: [`*`, `.js`, `.jsx`],
  },
  devtool: `inline-source-map`,
  module: {
    rules: [
      {
        test: /\.html?/,
        include: SOURCE_PATH,
        use: {
          loader: `html-loader`,
        },
      },
      {
        test: /\.jsx?/,
        include: SOURCE_PATH,
        use: [
          {
            loader: `babel-loader`,
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
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    emitOnErrors: false,
  },
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    host: DEVSERVER_HOST,
    hotOnly: true,
    inline: true,
    open: true,
    overlay: true,
    publicPath: DEVSERVER_ADDRESS,
  },
};
