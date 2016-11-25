'use strict';

module.exports = {
    entry: `${__dirname}/src/js/app.js`,
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
                query: {
                    "presets": ["es2015"],
                    "plugins": []
                }
            }
        ]
    }
}