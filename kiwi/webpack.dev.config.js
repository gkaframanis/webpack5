// We can't use ECMAScript modules in here.
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	// starting the building process
	entry: './src/kiwi.js',
	output: {
		// the name of generated file
		filename: '[name].bundle.js',
		// the directory inside which the file will be generated (absolute path)
		// the output path
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:9002/',
		// clean: true // to empty the output path after every build.
		// clean: {
		//     dry: true,
		//     keep: /\.css/
		// }
	},
	mode: 'development',
	// We need to tell webpack how to import image files, we need to give rules.
	devServer: {
		port: 9002,
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
		devMiddleware: {
			index: 'kiwi.html',
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				// The 2nd property is either type or use
				type: 'asset/resource',
				// type: 'asset/inline'
				// type: 'asset',
				// parser: {
				//     dataUrlCondition: {
				//         maxSize: 3 * 1024 // 3 kb
				//     }
				// }
			},
			// For sass / scss -- not in a separate file
			{
				test: /\.scss$/,
				use: [
					// We can combine multiple loaders
					// Webpack processes loaders from right to left!
					// sass ==> css ==> js ==> style to html
					'style-loader',
					'css-loader',
					'sass-loader',
				],
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
					},
				},
			},
			{
				test: /\.hbs$/,
				use: ['handlebars-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'kiwi.html',
			title: 'Kiwi',
			template: 'src/pageTemplate.hbs',
			description: 'Kiwi',
		}),
		new ModuleFederationPlugin({
			name: 'KiwiApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./KiwiPage': './src/components/KiwiPage/KiwiPage.js'
			}
		}),
	],
};
