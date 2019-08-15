const path = require('path');
// mini-css-extract-plugin插件是把css文件从style头部抽离出来的插件;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 对css做压缩处理;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 可以对打包的文件做gzip压缩;
const CompressPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig,{
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new TerserISPlugin({}),new OptimizeCSSAssetsPlugin({})], // 对css做压缩处理;
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:5].css',
            chunkFilename: 'css/[id].[contenthash:5].css',
        }), // 主要是把css抽离成一个单独的文件;
        new CompressPlugin({
            filename: '[path].gz[query]',
            test: new RegExp(
                '\\.(js|css)$'
            ),
            threshold: 10240,
            minRatio: 0.8
        }) // 对文件进行gzip压缩;
    ],
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader,"css-loader",'sass-loader']
            }
        ],
    }
})


