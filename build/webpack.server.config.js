const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin")

module.exports = {
    target:"node",
    mode:"development",
    entry:path.resolve(__dirname,"../src/entry-server"),
    output:{
        libraryTarget:"commonjs2",
        path:path.resolve(__dirname,"../dist/")
    },
    externals:Object.keys(require("../package.json").dependencies),
    resolve:{
        extensions:[".css",".js",".vue"]
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new VueSSRServerPlugin()
    ]
}