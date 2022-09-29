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
            }
        ]
    }
};