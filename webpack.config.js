const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    fallback: "style-loader",
    allChunks: true
});
const extractLess = new ExtractTextPlugin({
    filename: "css/[name].css",
    fallback: "style-loader",
    allChunks: true
});




module.exports = function(env) {
    if (env === 'production') {
        return merge.smart({
            entry: {
                index: path.resolve(__dirname, './src/index.js'),
            },

            output: {
                path: path.resolve(__dirname, "dist"),
                // publicPath: '../',
                filename: 'js/[name].js',
                library: "[name]",
            },

            module: {

                rules: [{
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader?minimize=true&sourceMap=true', 'autoprefixer-loader?browsers=last 2 versions']

                    },
                    {
                        test: /\.(png|jpg|gif)$/,
                        loader: 'file-loader?name=images/[name].[ext]'
                    },
                    {
                        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'file-loader?name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
                    },

                    {
                        test: /\.scss$/i,
                        use: extractSass.extract(['css-loader?minimize=true&sourceMap=true', 'autoprefixer-loader?browsers=last 2 versions', 'resolve-url-loader', 'sass-loader'])
                    },
                    {
                        test: /\.less$/i,
                        use: extractLess.extract(['css-loader?minimize=true&sourceMap=true', 'autoprefixer-loader?browsers=last 2 versions', 'less-loader'])
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    },
                ]
            },
            resolve: {
                modules: [
                    "node_modules",
                    path.resolve(__dirname, "app")
                ],
                extensions: [".js", ".json", ".jsx", ".css", "scss"],
                alias: {
                    'components': path.resolve(__dirname, './src/components'),
                    'containers': path.resolve(__dirname, './src/containers'),
                    'actions': path.resolve(__dirname, './src/actions'),
                    'reducers': path.resolve(__dirname, './src/reducers'),
                    'store': path.resolve(__dirname, './src/store'),
                    'assets': path.resolve(__dirname, './src/assets'),
                },
            },
            plugins: [
                extractSass,
                extractLess,
                new webpack.NoErrorsPlugin(),
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, './src/assets/index.html'),
                    filename: 'index.html',
                    //    chunks: ['index', 'common'],
                    path: outputPath
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        // don't show unreachable variables etc
                        warnings: false,
                        drop_console: true,
                        unsafe: true
                    }
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'common',
                    //   minChunks: 2                                    //ETE unenq asenq 6 hat js fayl kpnox ete erkusum gone krknvox fayler ka kqci arandzin common.js i mej..SA AVTOMAT KDNENQ
                    //   chunks: ['about','home']                        //Isk aystex konkret knshenq vor es erku fayleric,vor@ verevum (entry)-wv kpela, inch@ mej@ krknvuma qci common fayli mej
                })
                // new webpack.optimize.CommonsChunkPlugin({              //isk ete unenq eli fayler voroncic uzumenq urish kod arandznacnenq mer plagin@ kkanchen evs mek angam,ev arden fayli anun@ ktanq (common1)
                //           name: 'common1',
                //           minChunks: 2                    
                //           chunks: ['about1','home1']        
                //       }),
            ],

            devtool: false,
        });
    };


    //////////////////////////////////////////////////////development///////////////////////////////////////////////////////////////


    if (env === 'development') {
        return merge.smart({
            entry: {
                index: path.resolve(__dirname, './src/index.js'),
            },

            output: {
                path: path.resolve(__dirname, "dist"),
                // publicPath: '../',
                filename: 'js/[name].js',
                library: "[name]",
            },

            module: {

                rules: [{
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader?minimize=true&sourceMap=true', 'autoprefixer-loader?browsers=last 2 versions']

                    },
                    {
                        test: /\.(png|jpg|gif)$/,
                        loader: 'file-loader?name=images/[name].[ext]'
                    },
                    {
                        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'file-loader?name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
                    },

                    {
                        test: /\.scss$/i,
                        use: extractSass.extract(['css-loader?minimize=true&sourceMap=true', 'autoprefixer-loader?browsers=last 2 versions', 'resolve-url-loader', 'sass-loader'])
                    },
                    {
                        test: /\.less$/i,
                        use: extractLess.extract(['css-loader?minimize=true&sourceMap=true', 'autoprefixer-loader?browsers=last 2 versions', 'less-loader'])
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "eslint-loader",
                        options: {
                            fix:true
                        }
                    },
                ]
            },
            resolve: {
                modules: [
                    "node_modules",
                    path.resolve(__dirname, "app")
                ],
                extensions: [".js", ".json", ".jsx", ".css", "scss"],
                alias: {
                    'components': path.resolve(__dirname, './src/components'),
                    'containers': path.resolve(__dirname, './src/containers'),
                    'actions': path.resolve(__dirname, './src/actions'),
                    'reducers': path.resolve(__dirname, './src/reducers'),
                    'store': path.resolve(__dirname, './src/store'),
                    'assets': path.resolve(__dirname, './src/assets'),
                },
            },
            plugins: [
                extractSass,
                extractLess,
                new webpack.NoErrorsPlugin(),
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, './src/assets/index.html'),
                    filename: 'index.html',
                    //    chunks: ['index', 'common'],
                    path: outputPath
                }),

                new webpack.optimize.CommonsChunkPlugin({
                    name: 'common',
                    //   minChunks: 2                                    //ETE unenq asenq 6 hat js fayl kpnox ete erkusum gone krknvox fayler ka kqci arandzin common.js i mej..SA AVTOMAT KDNENQ
                    //   chunks: ['about','home']                        //Isk aystex konkret knshenq vor es erku fayleric,vor@ verevum (entry)-wv kpela, inch@ mej@ krknvuma qci common fayli mej
                })
            ],

            devtool: "cheap-inline-module-source-map",
            devServer: {
                contentBase: path.join(__dirname, "dist"),
                compress: true,
                port: 3000
            },
            watch: true
        });
    }
};