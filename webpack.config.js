const path = require('path')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const moduleObj = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
}

const client = {
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist', 'public'),
      compress: true,
      port: 80
    },
    entry: {
        'client': './src/client/client.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: moduleObj,
    plugins: [
      new HtmlWebPackPlugin({
        template: 'src/client/index.html'
      })
  ]
}

const server = {
    devtool: 'source-map',
    entry: {
        'server': './src/server/server.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()]
}

module.exports = [client, server]
