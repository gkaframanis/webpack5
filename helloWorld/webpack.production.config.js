// We can't use ECMAScript modules in here.
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    // starting the building process
    entry: './src/helloWorld.js',
    output: {
        // the name of generated file | [name] is the name we use in the entry
        filename: "[name].[contenthash].js",
        // the directory inside which the file will be generated (absolute path)
        // the output path
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/',
    },
    mode: 'production',
    // For common dependencies to be in their own bundle
    // eg lodash (the bundle that starts with numbers)
    // The script with the bundle is included only where it's needed.
    optimization: {
        splitChunks: {
            chunks: 'all',
            // At what size to extract common dependencies.
            minSize: 3000 // 3kb
        }
    },
    // We need to tell webpack how to import image files, we need to give rules.
    module: {
        rules: [
            // For sass / scss -- in a separate file
            {
                test: /\.scss$/,
                use: [
                    // We can combine multiple loaders
                    // Webpack processes loaders from right to left!
                    // sass ==> css ==> js ==> style to html
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            // For babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // preset ECMAScript 6,7,8,9,10... down to 5
                        // We can install any plugins we want with the features we want to use and they are not supported yet.
                        presets: ['@babel/env'],
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        // to separate the CSS for the bundle.js file to a separate file
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'helloWorld.html',
            title: 'Hello world',
            template: 'src/pageTemplate.hbs',
            description: "Hello World"
        }),
        new ModuleFederationPlugin({
			name: 'HelloWorldApp',
			filename: 'remoteEntry.js',
			exposes: {
                './HelloWorldPage': './src/components/HelloWorldPage/HelloWorldPage.js'
			},
		}),
    ]
};