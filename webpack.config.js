'use strict';

module.exports = {
    entry: "./src/js/app",
    output: {
        path: "./dist",
        filename: "build.js"
    },

    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel'
        }]
    }
};