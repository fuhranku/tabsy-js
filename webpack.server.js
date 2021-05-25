const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    target: "web",
    mode: "development",
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    devServer: {
        publicPath: './dist',
        contentBase: './src',
        watchContentBase: true,
        open: true,
    },
    watch: true
    // devtool: "source-map"
});