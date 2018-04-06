const config={
    entry:{
        pageone:'./entry/file.js',
        pagetwo:'./entry/entry.js'
    },
    output:{
        filename:'[name].js',
        path:__dirname+'/dist'
    }
}
module.exports=config;