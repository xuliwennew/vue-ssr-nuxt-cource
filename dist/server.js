const express = require("express")
const {createBundleRenderer} = require("vue-server-renderer")
const path = require("path")
const fs = require("fs")
const app = express()

app.use(express.static(__dirname))

app.use("*",async(req,res)=>{
    let context = {url:req.url}
    let serverBundle = require("./vue-ssr-server-bundle.json")
    let clientManifest  = require("./vue-ssr-client-manifest.json")
    let renderer = createBundleRenderer(serverBundle,{
        template:fs.readFileSync(path.resolve(__dirname,"template.html"),"utf-8"),
        clientManifest 
    })

    let c = await renderer.renderToString(context)
    res.send(c)
})

app.listen(3000)