const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = (env, options) => {
  const prod = options.mode === 'production'

  return {
    mode: 'development',
    devtool: false,
    entry: './src/index.tsx',
    resolve: { extensions: ['.js', '.tsx'] },
    output: {
      path: `${__dirname}/public`,
      publicPath: '/',
      filename: `bundle${prod ? '.[contenthash:8]' : ''}.js`
    },
    devServer: {
      publicPath: '',
      host: '0.0.0.0',
      historyApiFallback: true
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', ['@babel/env', { targets: { node: 'current' } }], '@babel/react']
          }
        }
      }, {
        test: /\.(css|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            context: './src/assets',
            name: `[path][name]${prod ? '.[contenthash:8]' : ''}.[ext]`
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
      ...prod ? [
        new CleanWebpackPlugin(),
        new CompressionWebpackPlugin()
      ] : []
    ]
  }
}
