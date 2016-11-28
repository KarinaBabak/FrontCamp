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
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader!autoprefixer-loader"
            }
        ]
    }
	
};

