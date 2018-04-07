var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
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

    },
    plugins: [
new  HtmlWebpackPlugin({
    filename:'index.html',
    template:'./index.html'
}),
new  HtmlWebpackPlugin({
    filename:'cart.html',
    template:'./cart.html'
})
    ]
};