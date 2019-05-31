const webpackMerge=require('webpack-merge');
const common=require('./webpack.config.js');
const uglifyjs=require('uglifyjs-webpack-plugin');
module.exports=webpackMerge(common,{
    devtool:'source-map',
    mode:'production',
    plugins:[
        new uglifyjs({
            sourceMap:true
        })
    ]
});
console.log('product');
console.log(process.env.NODE_env);