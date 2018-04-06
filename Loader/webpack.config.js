
// import Styles from 'style-loader!css-loader?modules!./styles.css';
// webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader' webpack-cli 方式运行

const config={
    entry:{
        pageone:'./entry/file.js',
        pagetwo:'./entry/entry.js',
    },
    output:{
        filename:'[name].js',
        path:__dirname+'/dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                 
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
            ]
    }
}

module.exports=config;