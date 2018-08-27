const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
const extractCSS = new ExtractTextPlugin('./[name].css');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OUTPUT_PATH = './dist'

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, OUTPUT_PATH),
		publicPath: './',
    filename: 'dist.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
          use: [ {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }],
      },
      {
        test: /\.s[ac]ss$/,
          use: extractCSS.extract({
            fallbackLoader: "style-loader", // creates style nodes from JS strings
            use:
            [{
              loader: "css-loader", // translates CSS into CommonJS
              options: { root: '' }
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }]
          })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    alias: {
      'bootstrap-scss$': '../node_modules/bootstrap/scss/bootstrap.scss',
      'bootstrap-js$': '../node_modules/bootstrap/dist/js/bootstrap.js',
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
   }),
   extractCSS
  ]
}

if (process.env.NODE_ENV === 'production') {
  const me = module.exports
  me.devtool = '#source-map'
  // me.output.publicPath = ''
  // http://vue-loader.vuejs.org/en/workflow/production.html
  me.plugins = (module.exports.plugins || []).concat([
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
