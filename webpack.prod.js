const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
    mode: "production",
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            }
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
            path: path.resolve(__dirname, "dist")
        })
    ],
    optimization:{
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin({
                terserOptions: {
                    compress:{
                        pure_funcs: [ 'console.log' ]
                    }
                }
            }),
        ]
    },
});