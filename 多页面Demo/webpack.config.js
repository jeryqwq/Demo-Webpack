var path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        index: './js/index.js',
        cart: './js/cart.js'
    },
    output: {
        path: path.join(__dirname,'./dist'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
rules:[
    {
        test: /\.css$/,
        include:path.join(__dirname,'css'),
        exclude:/node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
    }
]
    },
    plugins: [
new  HtmlWebpackPlugin({
    filename:'index.html',
    template:'./index.html',
    chunks:['index']
}),
new  HtmlWebpackPlugin({
    filename:'cart.html',
    template:'./cart.html',
    chunks:['cart'],
    minify:{
        removeComments:true,
        collapseWhitespace:true
    }
}),
new ExtractTextPlugin("styles.css"),
new UglifyJsPlugin({
    test: /\.js($|\?)/i,
    exclude: /\/node_modules/
}),
// new webpack.optimize.UglifyJsPlugin({
//     compress:{
//         warnings:true
//     }
// }),

    ]
};