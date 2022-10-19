// We can't use ECMAScript modules in here.
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
    entry: './src/imageCaption.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/',
    },
    mode: 'development',
    devServer: {
        port: 9003,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'imageCaption.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [      
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'imageCaption.html',
            title: 'Image Caption',
            template: 'src/pageTemplate.hbs',
            description: "Image Caption"
        }),
        new ModuleFederationPlugin({
			name: 'ImageCaptionApp',
			filename: 'remoteEntry.js',
			exposes: {
                './ImageCaption': './src/components/ImageCaption/ImageCaption.js'
			},
		}),
    ]
};