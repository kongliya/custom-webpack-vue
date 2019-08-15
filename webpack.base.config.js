// webpack.base.config.js 公共配置 主要包括开发生产一些通用的loader和plugin等;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[chunkhash:8].js',  // 打包后的文件名;
        path: path.resolve(__dirname,"dist"), // 打包后的路径;
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new VueLoaderPlugin()
        /**
         * 等价于
         * new HtmlWebpackPlugin({
         *  template: 'index.html',
         *  chunks: ['app']
         * })
         */
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/, // 忽略解析的文件夹;
                include: /src/, // 指定解析的文件夹;
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        name: 'imgs/[name].[hash:5].[ext]',
                        limit: 1000  // 小于1000byte的会被转成base64;
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
}