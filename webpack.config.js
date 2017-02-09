'use strict';

var webpack = require('webpack');
//const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        app: `${__dirname}/admin/admin.js`
    },

    output: {
        path: `${__dirname}/public/dist`,
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
                exclude: /(node_modules)///,
                // query: {
                //     "presets": ["es2015"],
                //     "plugins": ["add-module-exports"]
                // }
                
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/, 
                loader: "file?name=./img/[name].[ext]"
            },
            {
				loader: "style-loader!css-loader!less-loader",
				test: /\.less$/,
			}
        ]
    }
    //,

    // watch: NODE_ENV == 'development',
    // watchOptions: {
    //     aggregateTimeout: 300
    // },

    // devtool: NODE_ENV == 'development' ? 'cheap-module-source-map' : null,

    // plugins: [
    //     new WebpackBrowserPlugin(),
    //     new webpack.DefinePlugin({
    //         NODE_ENV: JSON.stringify(NODE_ENV)
    //     })
    // ],

    // devServer: {
    //     host: "localhost",
    //     port: 8000
    // }
	//
};

// <!--if (NODE_ENV == 'production') {
//   module.exports.plugins.push(
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           // don't show unreachable variables etc
//           warnings:     false,
//           drop_console: true,
//           unsafe:       true
//         }
//       })
//   );
// }-->