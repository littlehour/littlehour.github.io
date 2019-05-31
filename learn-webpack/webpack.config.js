const path=require('path');
const htmlwebpackplugin=require('html-webpack-plugin');
const cleanwebpackplugin=require('clean-webpack-plugin');
const webpack=require('webpack');
const extractTextPlugin=require('extract-text-webpack-plugin');//webpack4使用mini-css-extract-plugin
const miniCssExtractPlugin=require('mini-css-extract-plugin');
const workboxPlugin=require('workbox-webpack-plugin');

// const ASSET_PATH = process.env.ASSET_PATH || './';
module.exports=env=>{
    console.log(env);
    return {
        //学习管理资源
        entry:'./src/index.js',
        output:{
            filename:'bundle.js',
            path:path.join(__dirname,'distcss1')
        },
        module:{
            rules:[{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test:/\.(png|jpg|svg)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:2000
                    }
                }]
            },{
                test:/index\.html/,
                use:['file-loader?name=[name].[ext]','extract-loader','html-loader']
            },{
                test:/piece\.html/,
                use:[{
                    loader:'html-loader',
                    options:{
                        attrs:['img:src','img:data-src']
                    }
                }]
            },{
                test:/\.(eot|ttf|woff|woff2)$/,
                use:['file-loader?name=[name].[ext]']
            }]
        }

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
        // mode: "production",//貌似只要设置为production，就可以实现tree shaking(通过import和export删掉没有用的代码)
        // entry:'./src/app1.js',
        // output:{
        //     filename:'app11.bundle.js',
        //     path:path.join(__dirname,'tree')
        // }

        // 学习生产环境构建
        // entry:'./src/app1.js',
        // output:{
        //     filename:'app1.bundle.js',
        //     path:path.join(__dirname,'production')
        // },
        // plugins:[
        //     new htmlwebpackplugin({
        //         title:'production'
        //     }),
        //     new cleanwebpackplugin('production')
        // ]

        // 学习代码分离
        // entry:{
        //     vendor:['lodash','buffer'],
        //     app:'./src/split1.js',
        //     output:'./src/output.js'
        //     // index:'./src/split2.js'
        // },
        // output:{
        //     filename:'[name].[chunkhash].js',
        //     chunkFilename:'[name].[chunkhash].js',
        //     path:path.join(__dirname,'split'),
        // },
        // plugins:[
        //     // new webpack.optimize.CommonsChunkPlugin({
        //     //     name:'common'
        //     // })
        //     // new extractTextPlugin('styles.css'),
        //     new miniCssExtractPlugin({
        //         filename:'[name].[chunkhash].css',
        //         chunkFilename:'[query].css'
        //     }),
        //     new webpack.HashedModuleIdsPlugin(),
        //     new cleanwebpackplugin('split'),
        //     new htmlwebpackplugin({
        //         title:'split code'
        //     })
        // ],
        // optimization:{
        //     splitChunks: {
        //         // chunks:'initial',
        //         cacheGroups: {
        //             vendor:{
        //                 name:"vendor",
        //                 test:/[\\/]node_modules[\\/]/,
        //                 chunks:'initial',
        //                 // minChunks: 2
        //                 priority:10,
        //                 enforce:true
        //             },
        //             commons: {
        //                 name: "commons",
        //                 // test:/[app|output]/,
        //                 chunks:'initial',
        //                 minChunks: 2,
        //                 maxInitialRequests: 5,
        //                 minSize: 0
        //             }
        //         }
        //     },
        //     runtimeChunk:{
        //         name:"mainfest"
        //     }
        // },
        // module:{
        //     rules:[{
        //         test:/\.css$/,
        //         // use: extractTextPlugin.extract({
        //         //     fallback: "style-loader",
        //         //     use: "css-loader"
        //         // })
        //         use:[miniCssExtractPlugin.loader,'css-loader']
        //     }]
        // }

        // 学习打包library
        // mode: 'production',
        // entry: './src/library.js',
        // output: {
        //     path: path.join(__dirname, 'library'),
        //     filename: 'webpack-numbers.js',
        //     libraryTarget: 'umd',
        //     globalObject: 'this',
        //     // libraryExport: 'default',
        //     library: 'webpackNumbers'
        // },
        // plugins:[
        //     new htmlwebpackplugin({
        //         title:'webpack-numbers'
        //     }),
        //     new cleanwebpackplugin('library')
        // ],
        // externals: {
        //     'lodash': {
        //         commonjs: 'lodash',
        //         commonjs2: 'lodash',
        //         amd: 'lodash',
        //         root: '_'
        //     }
        // },
        // module: {
        //     rules: [
        //         {
        //             test: /\.(js)$/,
        //             exclude: /(node_modules|bower_components)/,
        //             use: 'babel-loader'
        //         }
        //     ]
        // }

        // 学习shimming、渐进式网络应用程序
        // mode:'production',
        // // entry:'./src/shimming.js',
        // entry:{
        //     polyfills:'./src/polyfill.js',
        //     shimming:'./src/shimming.js'
        // },
        // devtool:'source-map',
        // output:{
        //     path:path.join(__dirname,'shimming'),
        //     filename:'[name].bundle.js'
        // },
        // plugins:[
        //     new webpack.ProvidePlugin({
        //         // _:'lodash',
        //         join:['lodash','join'],
        //         g32:['./global.js','g32']
        //     }),
        //     new cleanwebpackplugin('shimming'),
        //     new htmlwebpackplugin({
        //         title:'shimming'
        //     }),
        //     new workboxPlugin.GenerateSW({
        //         clientsClaim:true,
        //         skipWaiting:true
        //     })
        // ],
        // module:{
        //     rules:[
        //     //     {
        //     //     test:require.resolve('./src/shimming.js'),
        //     //     use:'imports-loader?this=>window'
        //     // }
        //     {
        //         test:require.resolve('./src/global.js'),
        //         use:'exports-loader?g2,g31=g3.g31'
        //     }]
        // }

        // 学习集成typescript
        // entry:'./src/tstest.ts',
        // module:{
        //     rules:[{
        //         test:/\.tsx?$/,
        //         use:'ts-loader',
        //         exclude:/node_modules/
        //     }]
        // },
        // resolve:{
        //     extensions:['.ts','.tsx','.js']
        // },
        // output:{
        //     filename:'bundle.js',
        //     path:path.resolve(__dirname,'tstest')
        // },
        // devtool:'inline-source-map',
        // plugins:[
        //     new cleanwebpackplugin('tstest'),
        //     new htmlwebpackplugin({
        //         title:'test typescript'
        //     })
        // ]

        // 学习公共路径
        // entry:'./src/publicPath',
        // mode:'production',
        // output:{
        //     // publicPath:ASSET_PATH,
        //     path:path.join(__dirname,'publicPath'),
        //     filename:'bundle.js',
        //     chunkFilename:'[name].[chunkhash].js',
        // },
        // plugins:[
        //     new cleanwebpackplugin('publicPath'),
        //     new htmlwebpackplugin({
        //         title:'publicPath'
        //     }),
        //     // new miniCssExtractPlugin({
        //     //     filename:'[name].[chunkhash].css',
        //     //     chunkFilename:'[query].css'
        //     // })
        //     // new webpack.DefinePlugin({
        //     //     'process.env.ASSET_PATH':JSON.stringify(ASSET_PATH)
        //     // })
        // ],
        // module:{
        //     rules:[{
        //         test:/\.css$/,
        //         use:[{loader:'style-loader',loader:'css-loader'}]
        //         // use:[miniCssExtractPlugin.loader,'css-loader']
        //     },{
        //         test:/\.(png|jpg|svg)$/,
        //         use:['file-loader?name=[name].[ext]']
        //     }]
        // }
    }
};

// module.exports={
//     // 学习公共路径
//     // entry:'./src/publicPath',
//     // output:{
//     //     // publicPath:ASSET_PATH,
//     //     path:path.join(__dirname,'publicPath'),
//     //     filename:'bundle.js'
//     // },
//     // // plugins:[
//     // //     new cleanwebpackplugin('publicPath'),
//     // //     new htmlwebpackplugin({
//     // //         title:'publicPath'
//     // //     }),
//     // //     // new webpack.DefinePlugin({
//     // //     //     'process.env.ASSET_PATH':JSON.stringify(ASSET_PATH)
//     // //     // })
//     // // ],
//     // module:{
//     //     rules:[{
//     //         test:/\.css$/,
//     //         use:['style-loader','css-loader']
//     //     },{
//     //         test:/\.(png|jpg|svg)$/,
//     //         use:['file-loader?name=[name].[ext]']
//     //     }]
//     // }
// };