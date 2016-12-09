'use strict';

var webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';   
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        app: `${__dirname}/src/js/app`
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
                exclude: /(node_modules)/,
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
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/, 
                loader: "file?name=./img/[name].[ext]"
            }
        ]
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 300
    },

   

    plugins: [
        new WebpackBrowserPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
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