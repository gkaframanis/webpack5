// We can't use ECMAScript modules in here.
const path = require('path');

module.exports = {
    // starting the building process
    entry: "./src/index.js",
    output: {
        // the name of generated file
        filename: "bundle.js",
        // the directory inside which the file will be generated (absolute path)
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    // We need to tell webpack how to import image files, we need to give rules.
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                // The 2nd property is either type or use
                type: 'asset/resource'
                // type: 'asset/inline'
                // type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 3 * 1024 // 3 kb
                //     }
                // }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            // For css
            {
                test: /\.css$/,
                use: [
                    // We can combine multiple loaders
                    'style-loader', 'css-loader'
                ]
            },
            // For sass / scss
            {
                test: /\.scss$/,
                use: [
                    // We can combine multiple loaders
                    // Webpack processes loaders from right to left!
                    // sass ==> css ==> js ==> style to html
                    'style-loader', 'css-loader', 'sass-loader'
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
            }
        ]
    }
};