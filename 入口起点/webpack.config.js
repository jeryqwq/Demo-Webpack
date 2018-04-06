const HtmlWebpackPlugin=require('html-webpack-plugin')
const webpack=require('webpack');
const path = require('path');
const config = {
    entry: './entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mybundle.js'
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }]
    },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin(),//webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.
// new HtmlWebpackPlugin({template:'./src/index.html'})
//     ]
}
module.exports = config;//注，webpack最好不要全局安装，直接安装到当前项目下，Cannot find module 'webpack/lib/node/NodeTemplatePlugin'