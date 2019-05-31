const webpackMerge=require('webpack-merge');
const common=require('./webpack.config.js');
module.exports=webpackMerge(common,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./production'
    }
});
console.log('development');
console.log(process.env.NODE_env);