const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const cssnano = require('cssnano');

const { NoEmitOnErrorsPlugin, LoaderOptionsPlugin, DefinePlugin, HashedModuleIdsPlugin } = require('webpack');
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin, SuppressExtractedTextChunksWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints =  ['inline', 'polyfills', 'sw-register', 'vendor', 'main', 'vendorstyles', 'styles'];

const production = process.env.NODE_ENV === 'production';

const config = {
  resolve: {
    extensions:  ['.ts', '.js'],
    modules: ['./node_modules']
  },
  resolveLoader: {
    modules: ['./node_modules']
  },
  entry: {
    main: ['./src/main.ts'],
    polyfills: ['./src/polyfills.ts'],
    styles: ['./src/scss/paperhive/index.scss'],
    vendorstyles: ['./src/scss/vendor.scss'],
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[chunkhash:20].bundle.js',
    chunkFilename: '[id].[chunkhash:20].chunk.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /\/node_modules\//
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        test: /\.(eot|svg)$/,
        loader: 'file-loader?name=assets/[name].[hash:20].[ext]'
      },
      {
        test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        loader: 'url-loader?name=assets/[name].[hash:20].[ext]&limit=10000'
      },
      {
        exclude: [
          path.join(process.cwd(), 'src/scss/paperhive/index.scss'),
          path.join(process.cwd(), 'src/scss/vendor.scss'),
        ],
        test: /\.scss$/,
        loaders: [
          'exports-loader?module.exports.toString()',
          'css-loader?{\"sourceMap\":false,\"importLoaders\":1}',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        include: [
          path.join(process.cwd(), 'src/scss/paperhive/index.scss'),
          path.join(process.cwd(), 'src/scss/vendor.scss'),
        ],
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            'css-loader?{\"sourceMap\":false,\"importLoaders\":1}',
            'postcss-loader',
            'sass-loader'
          ],
          fallback: 'style-loader',
          publicPath: ''
        })
      },
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new ProgressPlugin(),
    new SuppressExtractedTextChunksWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: false,
      inject: true,
      compile: true,
      favicon: false,
      minify: false,
      cache: true,
      showErrors: true,
      chunks: 'all',
      excludeChunks: [],
      xhtml: true,
      chunksSortMode: (left, right) => {
        const leftIndex = entryPoints.indexOf(left.names[0]);
        const rightindex = entryPoints.indexOf(right.names[0]);
        return leftIndex > rightindex ? 1 : -1;
      }
    }),
    new BaseHrefWebpackPlugin({}),
    new CommonsChunkPlugin({
      name: 'inline',
      minChunks: null
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
      chunks: [
        'main'
      ]
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:20].bundle.css',
      disable: false
    }),
    new HashedModuleIdsPlugin({
      hashFunction: 'md5',
      hashDigest: 'base64',
      hashDigestLength: 4
    }),
    new AotPlugin({
      mainPath: 'main.ts',
      hostReplacementPaths: {
        'environments/environment.ts': 'environments/environment.prod.ts'
      },
      exclude: [],
      tsConfigPath: 'src/tsconfig.app.json',
      skipCodeGeneration: !production,
    })
  ],
  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty',
    tls: 'empty',
    net: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};

if (production) {
  config.devtool = false;

  config.plugins.push(...[
    new DefinePlugin({
      'process.env.NODE_ENV': '\"production\"'
    }),
    new UglifyJsPlugin({
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      sourceMap: false
    }),
  ]);
}

module.exports = config;
