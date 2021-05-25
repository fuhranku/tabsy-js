const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    // devtool: "source-map"
});