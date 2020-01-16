const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,"../src/entry-client"),
    output:{
        path:path.resolve(__dirname,"../dist/"),
        filename:"client.bundle.js"
    },
    resolve:{
        extensions:[".css",".js",".vue"]
    },
    externals:{
        "echarts":"echarts"
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
        new VueSSRClientPlugin()
    ]
}