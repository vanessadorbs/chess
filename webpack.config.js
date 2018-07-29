const path = require('path')
const nodeExternals = require('webpack-node-externals')

const client = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src', 'public'),
    compress: true,
    port: 80,
    open: true
  },
  entry: {
    'client': './src/client/client.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist', 'public')
  },
  module: {
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
}

const server = {
  devtool: 'source-map',
  entry: {
    'server': './src/server/server.js'
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  externals: [nodeExternals()],
  module: {
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
}

module.exports = [client, server]
