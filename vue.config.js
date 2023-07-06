const CompressionWebpackPlugin = require("compression-webpack-plugin"); //引入压缩插件
module.exports = {
    publicPath: './',
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    productionSourceMap: false,
    transpileDependencies: ['webpack-dev-server/client'],
    devServer:{
        https: false,
    },
    chainWebpack: config => {
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.entry.app = ['babel-polyfill', './src/main.js'];
        // 体积分析
        // config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    },
    configureWebpack: config => {
        if(process.env.NODE_ENV != "development"){
            const productionGzipExtensions = ['html', 'js', 'css','json','icon','svg','txt']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
        }
    }
} 
