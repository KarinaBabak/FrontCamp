'use strict';

module.exports = {
    entry: `${__dirname}/src/js/app.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: "build.js"
    },
        watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    cache: true,

    

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