const path = require("path");

module.exports = {
    mode: "development",
    entry: "./dist/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "../umd/bundle.js",
        globalObject: "this",
        library: {
            name: "HTMLHedron",
            type: "umd"
        }
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
};