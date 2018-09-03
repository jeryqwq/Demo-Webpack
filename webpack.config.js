const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack =require ('webpack')
module.exports={
entry:'./src/index.js',
devtool: 'inline-source-map',//解决打包后无法错误跟踪
devServer: {
         contentBase: './dist',
         hot:true
       },
plugins: [
        new HtmlWebpackPlugin({
           title: 'Output Management'
         }),
         new webpack.NamedModulesPlugin(),//配置模块热替换
         new webpack.HotModuleReplacementPlugin()
       ],
output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
          {  test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
                  ]
             },
             {
                 test:/\.(png|svg|jpg|gif)$/,
                 use:[
                     'file-loader'
                 ]
             }
        ]
    },
    mode: "production"
};