// webpack.dev.config.js 
// 一般的开发环境会装一个本地服务器 webpack=dev-server;
// 这个插件会把文件打包到内存之中,并且支持热更新和代理等等;
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',  // 为了错误调试;
    devServer: {  // webpack-dev-server的配置项;
        contentBase: path.join(__dirname,'dist'), // 文件读取;
        compress: true, // 压缩;
        port: 9000,  // 端口;
        hot: true  // 热更新;  (刷新时只替换模块不刷新页面;)
    }
})