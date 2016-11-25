'use strict';

module.exports = {
    entry: `${__dirname}/src/js/app`,

    output: {
        path: `${__dirname}/dist`,
        filename: "build.js"
    },

    resolve: {
        modulesDirectories: ['node_modules']
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },



    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    "presets": ["es2015"],
                    "plugins": ["add-module-exports"]
                }
            }
        ]
    }
}