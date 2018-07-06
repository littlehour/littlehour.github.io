const path=require('path');
const htmlwebpackplugin=require('html-webpack-plugin');
const cleanwebpackplugin=require('clean-webpack-plugin');
const webpack=require('webpack');
module.exports={
    //学习管理资源
    // entry:'./src/index.js',
    // output:{
    //     filename:'bundle.js',
    //     path:path.join(__dirname,'distcss')
    // },
    // module:{
    //     rules:[{
    //         test:/\.css$/,
    //         use:['style-loader','css-loader']
    //     },{
    //         test:/\.(png|jpg|svg)$/,
    //         use:[{
    //             loader:'url-loader',
    //             options:{
    //                 limit:2000
    //             }
    //         }]
    //     },{
    //         test:/index\.html/,
    //         use:['file-loader?name=[name].[ext]','extract-loader','html-loader']
    //     },{
    //         test:/piece\.html/,
    //         use:[{
    //             loader:'html-loader',
    //             options:{
    //                 attrs:['img:src','img:data-src']
    //             }
    //         }]
    //     },{
    //         test:/\.(eot|ttf|woff|woff2)$/,
    //         use:['file-loader?name=[name].[ext]']
    //     }]
    // }

    // 学习管理输出、开发、模块热替换
    // entry:{
    //     app1:'./src/app.js'
    // },
    // output:{
    //     filename:'[name].bundle.js',
    //     path:path.join(__dirname,'dist')
    // },
    // plugins:[
    //     new htmlwebpackplugin({
    //         title:'html-webpack-plugin'
    //     }),
    //     new cleanwebpackplugin('dist'),
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    // module:{
    //     rules:[{
    //         test:/\.css$/,
    //         use:['style-loader','css-loader']
    //     },{
    //         test:/\.(png|jpg|svg)$/,
    //         use:['file-loader?name=[name].[ext]']
    //     }]
    // },
    // devtool:'inline-source-map',
    // devServer:{
    //     contentBase:'./dist',
    //     hot:true
    // }

    // 学习tree shaking
    mode: "production",//貌似只要设置为production，就可以实现tree shaking(通过import和export删掉没有用的代码)
    entry:'./src/app1.js',
    output:{
        filename:'app11.bundle.js',
        path:path.join(__dirname,'tree')
    }
};