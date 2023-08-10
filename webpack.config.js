const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./dist/index.js"
    },
    output: {
        filename: "../umd/bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: "HTMLHedron",
    }
}