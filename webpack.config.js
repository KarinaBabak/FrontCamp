'use strict';

var webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';   
const WebpackBrowserPlugin = require('webpack-browser-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        fetch: `${__dirname}/node_modules/whatwg-fetch/fetch.js`,        
        app: `${__dirname}/src/js/app`,
        css: `${__dirname}/src/style/app`,
        "index.html": `${__dirname}/index.js`
    },

    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js"
    },

    resolve: {
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    "presets": ["es2015"],
                    "plugins": ["add-module-exports"]
                }
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader!autoprefixer-loader"
            },
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            }
        ]
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 300
    },

    devtool: NODE_ENV == 'development' ? 'cheap-module-source-map' : null,

    plugins: [
        new WebpackBrowserPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin("app.css"),
        new HtmlWebpackPlugin()
    ],

    devServer: {
        host: "localhost",
        port: 8000
    }
	
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}