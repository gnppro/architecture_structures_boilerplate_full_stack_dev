const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/assets/js/index.js'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'assets/js/main.js',
    publicPath: '../public/',
  },
  devServer: {
    contentBase: path.join(__dirname, '../'), // Ruta por defecto: root
    open: true, // Abre una pestaña en el navegador
    compress: true, // Comprime los archivos (gzip)
    publicPath: '/server/', //Los archivos estarán disponibles en esa ruta
    stats: 'errors-only', // Solo vamos a ver los mensajes que sean error.
    port: 9000// Puerto 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 
            "css-loader"
          ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              mimetype: "video/mp4",
              name: 'videos/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(webm)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              mimetype: "video/webm",
              name: 'videos/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "assets/css/[name].css"
    })
  ]
}