const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  target: 'web',

  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

        // All files with a '.css' extension will be handled by 'style-loader' and 'css-loader'.
        { test:/\.css$/, use:['style-loader','css-loader'] },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  plugins: [new HtmlWebpackPlugin({template: './public/index.html'})]
};