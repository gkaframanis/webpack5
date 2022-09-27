// We can't use ECMAScript modules in here.
const path = require('path');

module.exports = {
    // starting the building process
    entry: "./src/index.js",
    output: {
        // the name of generated file
        filename: "bundle.js",
        // the directory inside which the file will be generated (absolute path)
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
};